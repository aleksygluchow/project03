import { client } from '../../lib/contentful'; // Correct path to contentful.js

export async function getStaticProps() {
  // Fetch blog posts from Contentful
  const res = await client.getEntries({ content_type: 'blogPost' }); // Use the correct content type ID for blog posts
  
  // Map the data from Contentful to match your desired structure
  const posts = res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    content: item.fields.content,
  }));

  return {
    props: {
      posts,
    },
    revalidate: 10, // Optional: revalidate every 10 seconds for updated content
  };
}

export default function Blog({ posts }) {
  return (
    <div>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
