import AppLayout from "@/components/AppLayout";
import { CreatePost } from "@/components/CreatePost";
import { FriendRequests } from "@/components/FriendRequest";
import { PostFeed } from "@/components/PostFeed";
import React from "react";

const Home = () => {
  return (
    <>
      <AppLayout>
        <main className="flex ">
          <section className="flex flex-col gap-6 p-2 ">
            <div className="">
              <CreatePost />
            </div>
            <div>
              <PostFeed />
            </div>
          </section>
          <section className="basis-1/3 p-2 hidden sm:block">
            <div className="">
              <FriendRequests />
            </div>
          </section>
        </main>
      </AppLayout>
    </>
  );
};

export default Home;
