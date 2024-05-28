import React from 'react'


async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/8224gpzuf1l6/entries?access_token=9V101lXGp133FF4MGnGMZLUsAjRMNSIBuOMPtGiIX3o&content_type=trustpilotBlog`, { cache: 'no-store' });


  return res.json();
}
const Home = async () => {
  const blogs = await getBlogs();
  console.log(blogs);

  return (
    <div>Home</div>
  )
}

export default Home