import AppLayout  from "@/components/AppLayout"
import FriendsSearch from "@/components/FriendSearch"
import FriendsList from "@/components/FriendList"
import FriendSuggestions from "@/components/FriendSuggestions"

export default function FriendsPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-4 md:space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">Friends</h1>
        </div>

        <FriendsSearch />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          <div className="xl:col-span-2">
            <FriendsList />
          </div>
          <div className="order-first xl:order-last">
            <FriendSuggestions />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
