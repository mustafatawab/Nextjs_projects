"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Search, Filter, Camera, Sparkles } from "lucide-react";
import { mockImages, type ImageData } from "@/lib/mock-data";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());
  const [dbImages, setDbImages] = useState<ImageData[]>([]);
  const [allImages, setAllImages] = useState<ImageData[]>(mockImages);
  const supabase = createClient();

  // Load images from Supabase and combine with mock images
  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("images")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching images:", error.message);
        return;
      }

      if (data) {
        // Add fallback user data if user object is missing from DB record
        const dataWithUser = data.map((img: any) => ({
          ...img,
          user: img.user || {
            username: "User",
            full_name: "Gallery Member",
            avatar_url: "/placeholder.svg",
          },
        }));

        setDbImages(dataWithUser);
        // Combine DB images with mock images, DB images first
        setAllImages([...dataWithUser, ...mockImages]);
      }
    };

    fetchImages();

    const handleUploadEvent = () => {
      fetchImages();
    };

    window.addEventListener("imageUploaded", handleUploadEvent);
    return () => {
      window.removeEventListener("imageUploaded", handleUploadEvent);
    };
  }, [supabase]);

  const publishedImages = allImages.filter((image) => image.is_published);

  // Enhanced search functionality
  const filteredImages = publishedImages.filter((image) => {
    const matchesSearch =
      searchTerm === "" ||
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (image.tags &&
        image.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ));

    const matchesCategory =
      selectedCategory === "all" || image.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleLike = (imageId: string) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(imageId)) {
      newLikedImages.delete(imageId);
    } else {
      newLikedImages.add(imageId);
    }
    setLikedImages(newLikedImages);
  };

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "nature", label: "Nature" },
    { value: "portrait", label: "Portrait" },
    { value: "street", label: "Street" },
    { value: "architecture", label: "Architecture" },
    { value: "landscape", label: "Landscape" },
    { value: "macro", label: "Macro" },
    { value: "wildlife", label: "Wildlife" },
    { value: "lifestyle", label: "Lifestyle" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing Photography
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore a curated collection of stunning images from talented
              photographers around the world. Share your own work and connect
              with a community of visual storytellers.
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search images, photographers, tags, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {(searchTerm || selectedCategory !== "all") && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="text-sm"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Camera className="h-16 w-16 mx-auto" />
            </div>
            <p className="text-gray-500 text-xl mb-2">
              {searchTerm || selectedCategory !== "all"
                ? "No images found matching your criteria."
                : "No images published yet."}
            </p>
            <p className="text-gray-400">
              {searchTerm || selectedCategory !== "all"
                ? "Try different keywords or browse all images."
                : "Be the first to share your photography!"}
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {searchTerm || selectedCategory !== "all"
                    ? `Search Results (${filteredImages.length})`
                    : `Featured Gallery (${filteredImages.length})`}
                </h2>
                {dbImages.length > 0 && (
                  <Badge
                    variant="secondary"
                    className="flex items-center space-x-1"
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>{dbImages.length} Your Images</span>
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  Latest
                </Button>
                <Button variant="ghost" size="sm">
                  Popular
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={image.image_url || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                    {/* Show "Your Upload" badge for uploaded images */}
                    {dbImages.some((uploaded) => uploaded.id === image.id) && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-green-500 hover:bg-green-600 text-white">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Your Upload
                        </Badge>
                      </div>
                    )}

                    <Button
                      size="sm"
                      variant="ghost"
                      className={`absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        likedImages.has(image.id)
                          ? "text-red-500"
                          : "text-white hover:text-red-500"
                      }`}
                      onClick={() => toggleLike(image.id)}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          likedImages.has(image.id) ? "fill-current" : ""
                        }`}
                      />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {image.title}
                    </h3>
                    {image.description && (
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {image.description}
                      </p>
                    )}

                    {/* Tags */}
                    {image.tags && image.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {image.tags.slice(0, 3).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
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
                        <Avatar className="h-7 w-7">
                          <AvatarImage
                            src={image.user.avatar_url || "/placeholder.svg"}
                          />
                          <AvatarFallback className="text-xs bg-blue-100 text-blue-600">
                            {image.user.username.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-900">
                            {image.user.username}
                          </span>
                          <span className="text-xs text-gray-500">
                            {image.user.full_name}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <Badge variant="secondary" className="text-xs mb-1">
                          {new Date(image.created_at).toLocaleDateString()}
                        </Badge>
                        {image.category && (
                          <Badge
                            variant="outline"
                            className="text-xs capitalize"
                          >
                            {image.category}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
