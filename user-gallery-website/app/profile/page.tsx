"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Trash2, Eye, EyeOff, Heart, Share, Camera, Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import { mockCurrentUser, mockImages, type ImageData } from "@/lib/mock-data"

export default function ProfilePage() {
  const [profile, setProfile] = useState(mockCurrentUser)
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>([])
  const [allUserImages, setAllUserImages] = useState<ImageData[]>([])
  const [updating, setUpdating] = useState(false)
  const [activeTab, setActiveTab] = useState("published")

  // Load uploaded images from localStorage
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("uploadedImages") || "[]")
    setUploadedImages(savedImages)

    // Combine uploaded images with mock images for this user
    const mockUserImages = mockImages.filter((img) => img.user.id === mockCurrentUser.id)
    setAllUserImages([...savedImages, ...mockUserImages])
  }, [])

  // Listen for new uploads
  useEffect(() => {
    const handleStorageChange = () => {
      const savedImages = JSON.parse(localStorage.getItem("uploadedImages") || "[]")
      setUploadedImages(savedImages)
      const mockUserImages = mockImages.filter((img) => img.user.id === mockCurrentUser.id)
      setAllUserImages([...savedImages, ...mockUserImages])
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("imageUploaded", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("imageUploaded", handleStorageChange)
    }
  }, [])

  const publishedImages = allUserImages.filter((img) => img.is_published)
  const draftImages = allUserImages.filter((img) => !img.is_published)

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdating(true)

    // Simulate API call
    setTimeout(() => {
      setUpdating(false)
    }, 1000)
  }

  const deleteImage = (imageId: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      // Check if it's an uploaded image
      const isUploaded = uploadedImages.some((img) => img.id === imageId)

      if (isUploaded) {
        // Remove from localStorage
        const updatedUploaded = uploadedImages.filter((img) => img.id !== imageId)
        localStorage.setItem("uploadedImages", JSON.stringify(updatedUploaded))
        setUploadedImages(updatedUploaded)

        // Update all user images
        const mockUserImages = mockImages.filter((img) => img.user.id === mockCurrentUser.id)
        setAllUserImages([...updatedUploaded, ...mockUserImages])

        // Dispatch event to update other components
        window.dispatchEvent(new Event("imageUploaded"))
      } else {
        // For mock images, just remove from state (won't persist)
        setAllUserImages((prev) => prev.filter((img) => img.id !== imageId))
      }
    }
  }

  const togglePublish = (imageId: string) => {
    // Check if it's an uploaded image
    const isUploaded = uploadedImages.some((img) => img.id === imageId)

    if (isUploaded) {
      // Update in localStorage
      const updatedUploaded = uploadedImages.map((img) =>
        img.id === imageId ? { ...img, is_published: !img.is_published } : img,
      )
      localStorage.setItem("uploadedImages", JSON.stringify(updatedUploaded))
      setUploadedImages(updatedUploaded)

      // Update all user images
      const mockUserImages = mockImages.filter((img) => img.user.id === mockCurrentUser.id)
      setAllUserImages([...updatedUploaded, ...mockUserImages])

      // Dispatch event to update other components
      window.dispatchEvent(new Event("imageUploaded"))
    } else {
      // For mock images, just update state
      setAllUserImages((prev) =>
        prev.map((img) => (img.id === imageId ? { ...img, is_published: !img.is_published } : img)),
      )
    }
  }

  const stats = {
    totalImages: allUserImages.length,
    published: publishedImages.length,
    drafts: draftImages.length,
    uploaded: uploadedImages.length,
    totalLikes: 156 + uploadedImages.length * 5, // Add some likes for uploaded images
    totalViews: 2340 + uploadedImages.length * 25, // Add some views for uploaded images
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profile.avatar_url || "/placeholder.svg"} />
              <AvatarFallback className="text-2xl bg-blue-100 text-blue-600">
                {profile.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{profile.full_name}</h1>
                  <p className="text-gray-600">@{profile.username}</p>
                  {profile.bio && <p className="text-gray-700 mt-2 max-w-2xl">{profile.bio}</p>}
                </div>

                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share Profile
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 mt-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Camera className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">{stats.totalImages}</span>
                  <span className="text-gray-500">images</span>
                </div>
                {stats.uploaded > 0 && (
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-4 w-4 text-green-500" />
                    <span className="font-medium text-green-600">{stats.uploaded}</span>
                    <span className="text-gray-500">uploaded</span>
                  </div>
                )}
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">{stats.totalLikes}</span>
                  <span className="text-gray-500">likes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">{stats.totalViews}</span>
                  <span className="text-gray-500">views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-500">Joined Jan 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <TabsList className="grid w-full sm:w-auto grid-cols-3">
              <TabsTrigger value="published">
                Published ({stats.published})
                {uploadedImages.filter((img) => img.is_published).length > 0 && (
                  <Sparkles className="h-3 w-3 ml-1 text-green-500" />
                )}
              </TabsTrigger>
              <TabsTrigger value="drafts">
                Drafts ({stats.drafts})
                {uploadedImages.filter((img) => !img.is_published).length > 0 && (
                  <Sparkles className="h-3 w-3 ml-1 text-green-500" />
                )}
              </TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="published">
            <ImageGrid
              images={publishedImages}
              uploadedImages={uploadedImages}
              onDelete={deleteImage}
              onTogglePublish={togglePublish}
              emptyMessage="No published images yet."
              emptyAction="Upload your first image to get started!"
            />
          </TabsContent>

          <TabsContent value="drafts">
            <ImageGrid
              images={draftImages}
              uploadedImages={uploadedImages}
              onDelete={deleteImage}
              onTogglePublish={togglePublish}
              emptyMessage="No draft images."
              emptyAction="Images you save as drafts will appear here."
            />
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your profile details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={updateProfile} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={profile.full_name}
                        onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={profile.username}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        placeholder="Tell us about yourself and your photography..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" disabled={updating}>
                      {updating ? "Updating..." : "Update Profile"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Statistics</CardTitle>
                  <CardDescription>Your gallery performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{stats.totalImages}</div>
                      <div className="text-sm text-gray-600">Total Images</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{stats.uploaded}</div>
                      <div className="text-sm text-gray-600">Your Uploads</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{stats.totalLikes}</div>
                      <div className="text-sm text-gray-600">Total Likes</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{stats.totalViews}</div>
                      <div className="text-sm text-gray-600">Total Views</div>
                    </div>
                  </div>

                  {stats.uploaded > 0 && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">Upload Status</span>
                      </div>
                      <p className="text-sm text-green-700">
                        You have {stats.uploaded} images stored locally in your browser. These will persist until you
                        clear your browser data.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface ImageGridProps {
  images: ImageData[]
  uploadedImages: ImageData[]
  onDelete: (id: string) => void
  onTogglePublish: (id: string) => void
  emptyMessage: string
  emptyAction: string
}

function ImageGrid({ images, uploadedImages, onDelete, onTogglePublish, emptyMessage, emptyAction }: ImageGridProps) {
  if (images.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-16">
          <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-2">{emptyMessage}</p>
          <p className="text-gray-400">{emptyAction}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image) => {
        const isUploaded = uploadedImages.some((uploaded) => uploaded.id === image.id)

        return (
          <Card key={image.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="aspect-square relative">
              <Image
                src={image.image_url || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />

              {/* Show upload badge */}
              {isUploaded && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Uploaded
                  </Badge>
                </div>
              )}

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-1">
                <Button size="sm" variant="secondary" onClick={() => onTogglePublish(image.id)} className="h-8 w-8 p-0">
                  {image.is_published ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="destructive" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Delete Image</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete "{image.title}"? This action cannot be undone.
                        {isUploaded && " This will permanently remove the image from your browser storage."}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Cancel</Button>
                      <Button variant="destructive" onClick={() => onDelete(image.id)}>
                        Delete
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {image.title}
                  </h3>
                  {image.description && <p className="text-gray-600 text-sm mb-2 line-clamp-2">{image.description}</p>}
                </div>
              </div>

              {/* Tags */}
              {image.tags && image.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {image.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                  {image.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{image.tags.length - 3}
                    </Badge>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant={image.is_published ? "default" : "secondary"} className="text-xs">
                    {image.is_published ? "Published" : "Draft"}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {new Date(image.created_at).toLocaleDateString()}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Heart className="h-3 w-3" />
                  <span>{Math.floor(Math.random() * 50) + 1}</span>
                  <Eye className="h-3 w-3 ml-2" />
                  <span>{Math.floor(Math.random() * 200) + 10}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
