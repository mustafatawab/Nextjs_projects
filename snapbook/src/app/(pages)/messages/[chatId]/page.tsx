import AppLayout from "@/components/AppLayout"
import ChatWindow from "@/components/ChatWindow"
import ChatList from "@/components/ChatList"
import NewChatDialog from "@/components/NewChatDialog"



interface ChatPageProps {
  params: {
    chatId: string
  }
}

// Mock data - in a real app, this would come from a database
const getChatData = (chatId: string) => {
  const chats = {
    "1": {
      name: "Alex Smith",
      avatar: "/male-professional-headshot.png",
      isOnline: true,
    },
    "2": {
      name: "Mary Johnson",
      avatar: "/professional-female-headshot.png",
      isOnline: true,
    },
  }
  return chats[chatId as keyof typeof chats] || null
}

export default function ChatPage({ params }: ChatPageProps) {
  const chatData = getChatData(params.chatId)

  if (!chatData) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-gray-500">
            <h3 className="text-lg font-medium mb-2">Chat not found</h3>
            <p className="text-sm">The conversation you are looking for does not exist.</p>
          </div>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="flex h-full">
        {/* Chat List Sidebar - Hidden on mobile when viewing chat */}
        <div className="hidden lg:block w-80 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
              <NewChatDialog />
            </div>
          </div>
          <ChatList />
        </div>

        {/* Chat Window */}
        <div className="flex-1">
          <ChatWindow
            chatId={params.chatId}
            chatName={chatData.name}
            chatAvatar={chatData.avatar}
            isOnline={chatData.isOnline}
          />
        </div>
      </div>
    </AppLayout>
  )
}
