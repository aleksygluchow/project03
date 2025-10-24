import Head from 'next/head';
import Layout from '../components/Layout';

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
      include: 10 
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
        coverImage: item.fields.coverImage?.fields?.file?.url || null,
      }));

    return {
      props: { posts },
      revalidate: 10,
    };
  } catch (err) {
    console.error('Error fetching blog posts:', err.message);
    return {
      props: { posts: [] },
      revalidate: 10,
    };
  }
}

import { BLOCKS } from '@contentful/rich-text-types';

export default function Blog({ posts }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // renderOptions inside Blog so it can use the lightbox state
const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, details, fileName } = node.data.target.fields.file;
      const description = node.data.target.fields.description || fileName;

      const src = `https:${url}`;
      const thumb = `${src}?w=700&fm=webp&q=80`;

      const isPortrait = details.image.height > details.image.width;

      return (
        <div className={`blog-image ${isPortrait ? "portrait" : "landscape"}`}>
          <img
            src={thumb}
            alt={description}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: isPortrait ? "350px" : "500px", // ✅ keep proportions sensible
              borderRadius: "8px",
              cursor: "pointer",
              objectFit: "contain"
            }}
            onClick={() => {
              setLightboxImage(src);
              setLightboxOpen(true);
            }}
          />
        </div>
      );
    },
  },
};



  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Aliaksei Hlukhau's webpage." />
        <meta property="og:title" content="Blog" />
        <meta property="og:description" content="Aliaksei Hlukhau – Physics student." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eigen.to" />
        <meta property="og:image" content="/images/preview.png" />
      </Head>

<div className="page-container">
  <h1 className="page-title">Blog</h1>
  {posts.length === 0 && <p>No blog posts found.</p>}
  {posts.map((post) => (
    <article key={post.id} className="card">
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
      <div className="blog-content">
        {documentToReactComponents(post.content, renderOptions)}
      </div>
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

