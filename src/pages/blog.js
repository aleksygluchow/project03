import Head from 'next/head';
import Layout from '../components/Layout'


import Image from 'next/image';
import { client } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export async function getStaticProps() {
  try {
    const res = await client.getEntries({ 
  content_type: 'blog',
  order: '-fields.publishDate',
  include: 10 // <--- this is the important part
});

    if (!res.items) {
      throw new Error('No blog posts returned from Contentful');
    }

 const posts = res.items
  .filter(item => item.fields.publishDate)
  .map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    content: item.fields.content,
    publishDate: item.fields.publishDate,
    coverImage: item.fields.coverImage?.fields?.file?.url || null, // ✅ add this
  }));

    return {
      props: {
        posts,
      },
      revalidate: 10,
    };
  } catch (err) {
    console.error('Error fetching blog posts:', err.message);
    return {
      props: {
        posts: [],
      },
      revalidate: 10,
    };
  }
}

import { BLOCKS } from '@contentful/rich-text-types';

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, fileName } = node.data.target.fields.file;
      const description = node.data.target.fields.description || fileName;

      const src = `https:${url}`;
      const thumb = `${src}?w=700&fm=webp&q=80`;

      return (
        <img
          src={thumb}
          alt={description}
          style={{
            maxWidth: "90%",
            maxHeight: "400px",
            display: "block",
            margin: "1rem auto",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => {
            setLightboxImage(src);   // full-size image
            setLightboxOpen(true);
          }}
        />
      );
    },
  },
};




export default function Blog({ posts }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // ⬇️ renderOptions is now inside Blog, can use the state
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, fileName } = node.data.target.fields.file;
        const description = node.data.target.fields.description || fileName;

        const src = `https:${url}`;
        const thumb = `${src}?w=700&fm=webp&q=80`;

        return (
          <img
            src={thumb}
            alt={description}
            style={{
              maxWidth: "90%",
              maxHeight: "400px",
              display: "block",
              margin: "1rem auto",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => {
              setLightboxImage(src);   // open full-size
              setLightboxOpen(true);
            }}
          />
        );
      },
    },
  };

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Aliaksei Hlukhau's webpage." />
        {/* Open Graph */}
        <meta property="og:title" content="Blog" />
        <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

      <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 0.5rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Blog</h1>
        {posts.length === 0 && <p>No blog posts found.</p>}
        {posts.map((post) => (
          <article key={post.id} style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            padding: '1.5rem',
            marginBottom: '2rem',
            transition: 'box-shadow 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.12)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)'}
          >
            {post.coverImage && (
              <div style={{ marginBottom: '1rem' }}>
                <div className="cover-image">
                  <Image
                    src={`https:${post.coverImage}`}
                    alt={post.title}
                    fill
                    className="cover-img"
                  />
                </div>
              </div>
            )}

            <small style={{ color: '#666', fontSize: '0.9rem' }}>
              {new Date(post.publishDate).toLocaleDateString()}
            </small>
            <h2 style={{ marginTop: 0 }}>{post.title}</h2>
            <div>{documentToReactComponents(post.content, renderOptions)}</div>
          </article>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={[{ src: lightboxImage }]}
        />
      )}
    </>
  );
}

