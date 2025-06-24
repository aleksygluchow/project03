export default function Blog({ posts }) {
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
      <h1>My Blog</h1>
      {posts.length === 0 && <p>No blog posts found.</p>}
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <div>{documentToReactComponents(post.content)}</div>
        </article>
      ))}
    </div>
  );
}