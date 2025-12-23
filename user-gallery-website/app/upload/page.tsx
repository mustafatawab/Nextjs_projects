"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, X, ImageIcon, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { mockCurrentUser, type ImageData } from "@/lib/mock-data"

export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    isPublished: true,
    category: "nature",
  })
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadComplete, setUploadComplete] = useState(false)
  const router = useRouter()

  const categories = [
    "nature",
    "portrait",
    "street",
    "architecture",
    "abstract",
    "wildlife",
    "landscape",
    "macro",
    "travel",
    "fashion",
    "lifestyle",
  ]

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setSelectedFiles((prev) => [...prev, ...files])

      files.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          setPreviewUrls((prev) => [...prev, result])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index))
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const parseTags = (tagString: string) => {
    return tagString
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedFiles.length === 0 || !formData.title) return

    setUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval)
          return 90
        }
        return prev + 10
      })
    }, 200)

    // Process images and save to localStorage
    setTimeout(() => {
      const newImages: ImageData[] = selectedFiles.map((file, index) => ({
        id: `uploaded-${Date.now()}-${index}`,
        title: selectedFiles.length === 1 ? formData.title : `${formData.title} ${index + 1}`,
        description: formData.description,
        image_url: previewUrls[index],
        is_published: formData.isPublished,
        created_at: new Date().toISOString(),
        user: mockCurrentUser,
        tags: parseTags(formData.tags),
        category: formData.category,
      }))

      // Save to localStorage
      const existingImages = JSON.parse(localStorage.getItem("uploadedImages") || "[]")
      const updatedImages = [...newImages, ...existingImages]
      localStorage.setItem("uploadedImages", JSON.stringify(updatedImages))

      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event("imageUploaded"))

      setUploadProgress(100)
      setUploadComplete(true)

      setTimeout(() => {
        router.push("/")
      }, 2000)
    }, 2000)
  }

  if (uploadComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Complete!</h2>
            <p className="text-gray-600 mb-4">
              Your {selectedFiles.length} image{selectedFiles.length !== 1 ? "s have" : " has"} been successfully
              uploaded and {formData.isPublished ? "published" : "saved as draft"}.
            </p>
            <div className="flex space-x-2 justify-center">
              <Button onClick={() => router.push("/")}>View Gallery</Button>
              <Button variant="outline" onClick={() => router.push("/profile")}>
                View Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Images</h1>
          <p className="text-gray-600">Share your photography with the community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Image Details</CardTitle>
                <CardDescription>Add information about your images</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpload} className="space-y-6">
                  {/* File Upload Area */}
                  <div className="space-y-4">
                    <Label>Images *</Label>
                    {selectedFiles.length === 0 ? (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer">
                        <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                        <div className="space-y-2">
                          <Label htmlFor="file-upload" className="cursor-pointer">
                            <span className="text-blue-600 hover:text-blue-500 text-lg font-medium">
                              Click to upload
                            </span>
                            <span className="text-gray-600"> or drag and drop</span>
                          </Label>
                          <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                          <p className="text-xs text-gray-400">You can upload multiple images at once</p>
                        </div>
                        <Input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {previewUrls.map((url, index) => (
                            <div key={index} className="relative group">
                              <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                  src={url || "/placeholder.svg"}
                                  alt={`Preview ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => removeFile(index)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                              <div className="absolute bottom-2 left-2 right-2">
                                <Badge variant="secondary" className="text-xs truncate w-full">
                                  {selectedFiles[index]?.name}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600">{selectedFiles.length} image(s) selected</p>
                          <Label htmlFor="file-upload-more" className="cursor-pointer">
                            <Button type="button" variant="outline" size="sm" asChild>
                              <span>Add More</span>
                            </Button>
                          </Label>
                          <Input
                            id="file-upload-more"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileSelect}
                            className="hidden"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        placeholder="Enter image title"
                        required
                      />
                      {selectedFiles.length > 1 && (
                        <p className="text-xs text-gray-500">Numbers will be added for multiple images</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleInputChange("category", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe your images, the story behind them, or technical details..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => handleInputChange("tags", e.target.value)}
                      placeholder="nature, landscape, sunset, mountains (comma separated)"
                    />
                    {formData.tags && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {parseTags(formData.tags).map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="publish"
                      checked={formData.isPublished}
                      onCheckedChange={(checked) => handleInputChange("isPublished", checked)}
                    />
                    <Label htmlFor="publish">Publish immediately</Label>
                    <span className="text-sm text-gray-500">
                      ({formData.isPublished ? "Will be visible to everyone" : "Save as draft"})
                    </span>
                  </div>

                  {uploading && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Processing images...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="w-full" />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={uploading || selectedFiles.length === 0 || !formData.title}
                  >
                    {uploading
                      ? "Processing..."
                      : `Upload ${selectedFiles.length} Image${selectedFiles.length !== 1 ? "s" : ""}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Upload Tips */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Upload Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-1">Image Quality</h4>
                  <p className="text-gray-600">Upload high-resolution images for the best viewing experience.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">File Formats</h4>
                  <p className="text-gray-600">Supported formats: JPEG, PNG, GIF. Maximum size: 10MB per image.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Tags</h4>
                  <p className="text-gray-600">Use relevant tags to help others discover your work.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Multiple Images</h4>
                  <p className="text-gray-600">Upload multiple images at once - they'll be numbered automatically.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Storage Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Storage:</span>
                    <span className="font-medium">Browser Local</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Persistence:</span>
                    <span className="font-medium">Session Only</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Images are stored locally in your browser. They will persist until you clear your browser data.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
