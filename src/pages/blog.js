import Head from 'next/head';


import { client } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticProps() {
  try {
    const res = await client.getEntries({ 
      content_type: 'blog',
      order: '-fields.publishDate' // newest first!
     });

    if (!res.items) {
      throw new Error('No blog posts returned from Contentful');
    }

    const posts = res.items
  .filter(item => item.fields.publishDate) // ensure date is present
  .map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    content: item.fields.content,
    publishDate: item.fields.publishDate,
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

export default function Blog({ posts }) {
  return (
  <>
      <Head>
        <title>Home – Aliaksei Hlukhau</title>
      </Head>
    <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 0.5rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Blog</h1>
      {posts.length === 0 && <p>No blog posts found.</p>}
      {posts.map((post) => (
        <article
          key={post.id}
          style={{
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

          <small style={{ color: '#666', fontSize: '0.9rem' }}>
    {new Date(post.publishDate).toLocaleDateString()}
  </small>
          <h2 style={{ marginTop: 0 }}>{post.title}</h2>
          <div>{documentToReactComponents(post.content)}</div>
        </article>
      ))}
    </div>
    </>
  );
}
