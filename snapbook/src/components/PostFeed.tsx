import { PostCard } from "./PostCard"

const mockPosts = [
  {
    id: "1",
    author: {
      name: "Alex Smith",
      avatar: "/male-professional-headshot.png",
    },
    content: "Hello everyone!",
    timestamp: "2h",
    likes: 5,
    comments: 2,
  },
  {
    id: "2",
    author: {
      name: "Alex Smith",
      avatar: "/male-professional-headshot.png",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum dolor sit amet, consectetur...",
    timestamp: "5h",
    likes: 8,
    comments: 4,
  },{
    id: "2",
    author: {
      name: "Alex Smith",
      avatar: "/male-professional-headshot.png",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum dolor sit amet, consectetur...",
    timestamp: "5h",
    likes: 8,
    comments: 4,
  },
]

export function PostFeed() {
  return (
    <div className="space-y-6 ">
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
