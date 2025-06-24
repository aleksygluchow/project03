import { client } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticProps() {
  try {
    const res = await client.getEntries({ content_type: 'blog' });

    if (!res.items) {
      throw new Error('No blog posts returned from Contentful');
    }

    const posts = res.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      content: item.fields.content, // raw rich text document
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
    <div>
      <h1>My Blog</h1>
      {posts.length === 0 && <p>No blog posts found.</p>}
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          {/* ✅ render rich text safely */}
          <div>{documentToReactComponents(post.content)}</div>
        </article>
      ))}
    </div>
  );
}
