export interface BlogType {
  id: number;
  title: string;
  // categories : string;
  date: string;
  body: string;
  category: string;
  image: string;
}

export async function getBlogsById(id: any) {
  const blogs = await getBlogs();
  const blogData: BlogType[] = blogs.items;
  const data = blogData.find((item) => item.id == id);
}
export async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=trustpilotBlog`
  );

  return res.json();
}
export default getBlogs;
