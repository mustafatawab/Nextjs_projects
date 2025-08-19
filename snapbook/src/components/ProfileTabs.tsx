"use client";

import ProfilePosts from "./ProfilePosts";
import ProfileAbout from "./ProfileAbout";
import ProfilePhotos from "./ProfilePhotos";
import ProfileFriends from "./ProfileFriends";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfileTabs() {
  return (
    <div className="px-4 sm:px-6">
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-green-50 border-b dark:bg-black dark:border-black border-green-200">
          <TabsTrigger
            value="posts"
            className="data-[state=active]:bg-green-950 dark:data-[state=active]:bg-green-950 data-[state=active]:text-white hover:bg-green-100 dark:hover:bg-green-950"
          >
            Posts
          </TabsTrigger>

          <TabsTrigger
            value="about"
            className="data-[state=active]:bg-green-950 dark:data-[state=active]:bg-green-950 data-[state=active]:text-white hover:bg-green-100 dark:hover:bg-green-950"

          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="photos"
            className="data-[state=active]:bg-green-950 dark:data-[state=active]:bg-green-950 data-[state=active]:text-white hover:bg-green-100 dark:hover:bg-green-950"

          >
            Photos
          </TabsTrigger>
          <TabsTrigger
            value="friends"
            className="data-[state=active]:bg-green-950 dark:data-[state=active]:bg-green-950 data-[state=active]:text-white hover:bg-green-100 dark:hover:bg-green-950"

          >
            Friends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6">
          <ProfilePosts />
        </TabsContent>

        <TabsContent value="about" className="mt-6">
          <ProfileAbout />
        </TabsContent>

        <TabsContent value="photos" className="mt-6">
          <ProfilePhotos />
        </TabsContent>

        <TabsContent value="friends" className="mt-6">
          <ProfileFriends />
        </TabsContent>
      </Tabs>
    </div>
  );
}
