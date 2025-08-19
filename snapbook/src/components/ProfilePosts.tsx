import { PostCard } from "./PostCard"

const userPosts = [
  {
    id: "1",
    author: {
      name: "John Doe",
      avatar: "/professional-headshot.png",
    },
    content: "Just finished working on a new React project! Excited to share it with everyone soon. 🚀",
    timestamp: "3h",
    likes: 24,
    comments: 8,
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      avatar: "/professional-headshot.png",
    },
    content:
      "Beautiful sunset from my office window today. Sometimes you need to take a moment to appreciate the simple things in life.",
    timestamp: "1d",
    likes: 42,
    comments: 12,
  },
  {
    id: "3",
    author: {
      name: "John Doe",
      avatar: "/professional-headshot.png",
    },
    content:
      "Attending the tech conference this weekend. Looking forward to learning about the latest trends in web development!",
    timestamp: "3d",
    likes: 18,
    comments: 5,
  },
]

export default function ProfilePosts() {
  return (
    <div className="space-y-6">
      {userPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
