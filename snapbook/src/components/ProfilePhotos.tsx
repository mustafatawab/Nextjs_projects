import Image from "next/image"


export default function ProfilePhotos() {
  const photos = [
    "https://i.pinimg.com/236x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg",
    

  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="aspect-square bg-muted rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image src={photo || "/placeholder.svg"} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" width={200} height={200}/>
        </div>
      ))}
    </div>
  )
}
