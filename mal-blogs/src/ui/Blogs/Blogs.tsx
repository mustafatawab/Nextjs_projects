import Image from "next/image";
import React, { Suspense } from "react";
import Link from "next/link";

async function getBlogs() {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=malBlogs`,
      { cache: "no-store" }
    );
    // console.log("response" , res);
    const response = res.json();

    return response;
  } catch (error) {
    console.log("Error ", error);
    return error;
  }
}

export default async function Blogs() {
  const blogs = await getBlogs();
  // console.log(blogs)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20 mb-32">
        <Suspense fallback={<Loading />}>
        {blogs.items &&
          blogs.items.map((blog: any) => {
            // const image =  blogs.includes.Asset.find((img : any) => blog.fields.image.sys.id == img.sys.id)
            // const imageUrl = image.fields.file.url
            return (
              <Link
                className="block shadow-xl  mx-auto md:mx-0 w-full sm:w-2/3 md:w-full"
                href={`/blogs/${blog.fields.slug}`}
                key={blog.sys.id}
              >
                <div className="rounded-lg">
                  {blogs.includes.Asset &&
                    blogs.includes.Asset.map((img: any) => {
                      return (
                        <div key={img.sys.id}>
                          {blog.fields.image.sys.id == img.sys.id ? (
                            <Image
                              src={"https:" + img.fields.file.url}
                              alt=""
                              width={500}
                              height={500}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}

                  {/* <Image src={imageUrl}  alt='' width={500} height={500}  /> */}
                  <div className="bg-white py-5 px-3 space-y-3 ">
                    <h2
                      className="text-xl font-bold"
                      style={{
                        display: "webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "2",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        height: "30px",
                      }}
                    >
                      {blog.fields.title}
                    </h2>

                    {/*style={{display : "webkit-box" , WebkitBoxOrient : "vertical" , WebkitLineClamp : "2" , overflow : "hidden" , textOverflow : "ellipsis" ,height : "40px"}} */}
                    <p
                      className="text-black/80"
                      style={{
                        display: "webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "2",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        height: "50px",
                      }}
                    >
                      {blog.fields.shortDescription}
                    </p>
                    {/* <p>SLug : {blog.fields.slug}</p>*/}

                    <button className="bg-[#FCB400] text-black hover:bg-transparent  hover:border-2 hover:border-black px-4 py-2 rounded">
                      Read More
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
          </Suspense>
      </div>
    </>
  );
}



const Loading = () => <h1 className="text-4xl font-bold p-5">Loading ...</h1>