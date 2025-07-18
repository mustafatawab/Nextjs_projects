import Wrapper from "@/components/wrapper";
import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getBlogs() {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=malBlogs`,
      { cache: "no-store" }
    );
    // const res = await fetch("https://cdn.contentful.com/spaces/viycukvlh0rc/entries?access_token=JjuH78BXKAhAEMb58hhJp5dBcuRnbRJaYcYatn8smMw&content_type=malBlogs")
    return res.json();
  } catch (error) {
    return error;
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const blogs = await getBlogs();
  const fileteredBlogs = blogs.items.find(
    (item: any) => item.fields.slug == params.slug
  );

  // console.log(fileteredBlogs);
  return (
    <Wrapper>
      <div className="text-center flex flex-col justify-center items-center gap-10 ">
        <h1 className="text-center text-4xl font-bold text-[#FCB400]">
          {fileteredBlogs.fields.title}
        </h1>

        <div>
          {blogs.includes.Asset.map((img: any, i: number) => {
            return (
              <div key={img.sys.id}>
                {fileteredBlogs.fields.image.sys.id == img.sys.id ? (
                  <Image
                    src={"https:" + img.fields.file.url}
                    className="w-auto"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {/* <p className='lg:px-40'>{fileteredBlogs.fields.shortDescription}</p> */}
        <div className="text-xl text-justify leading-relaxed  lg:w-2/3 mx-auto rich">
          {documentToReactComponents(fileteredBlogs.fields.body)}
          {/* <RichTextRenderer document={fileteredBlogs.fields.description}/> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
