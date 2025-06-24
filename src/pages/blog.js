import { client } from '../../lib/contentful';

export async function getStaticProps() {
  try {
    const res = await client.getEntries({ content_type: 'blog' });

    if (!res.items) {
      throw new Error('No blog posts returned from Contentful');
    }

    const posts = res.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      content: item.fields.content || '',
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
        posts: [], // fallback to empty array
      },
      revalidate: 10,
    };
  }
}
