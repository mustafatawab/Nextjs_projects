import  AppLayout  from "@/components/AppLayout"
import { MessageCircle } from "lucide-react"
import NewChatDialog  from "@/components/NewChatDialog"
import  ChatList  from "@/components/ChatList"
export default function MessagesPage() {
  return (
    <AppLayout>
      <div className="flex h-full">
        {/* Chat List Sidebar */}
        <div className="w-full md:w-80 border-r border-gray-200 dark:border-gray-600 bg-white dark:bg-black">
          <div className="p-4 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Messages</h1>
              <NewChatDialog />
            </div>
          </div>
          <ChatList />
        </div>

        {/* Chat Window */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50 dark:bg-black/40">
          <div className="text-center text-gray-500">
            <MessageCircle className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium mb-2">Select a conversation</h3>
            <p className="text-sm">Choose from your existing conversations or start a new one</p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
