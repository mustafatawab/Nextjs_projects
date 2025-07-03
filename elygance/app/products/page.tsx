"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import { products } from "@/lib/products"

export default function ProductsPage() {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<number[]>([])
  const [filters, setFilters] = useState({
    category: [] as string[],
    priceRange: [0, 200] as [number, number],
    sortBy: "featured",
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category],
    }))
  }

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [value[0], value[1]] as [number, number],
    }))
  }

  const filteredProducts = products
    .filter((product) => {
      // Filter by category
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false
      }

      // Filter by price range
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      // Sort products
      switch (filters.sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "featured":
        default:
          return b.featured ? 1 : -1
      }
    })

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 space-y-6">
          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="women"
                  checked={filters.category.includes("Women")}
                  onCheckedChange={() => toggleCategory("Women")}
                />
                <Label htmlFor="women">Women</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="men"
                  checked={filters.category.includes("Men")}
                  onCheckedChange={() => toggleCategory("Men")}
                />
                <Label htmlFor="men">Men</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="unisex"
                  checked={filters.category.includes("Unisex")}
                  onCheckedChange={() => toggleCategory("Unisex")}
                />
                <Label htmlFor="unisex">Unisex</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-4">Price Range</h3>
            <Slider
              defaultValue={[0, 200]}
              max={200}
              step={1}
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              className="mb-6"
            />
            <div className="flex items-center justify-between">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-4">Sort By</h3>
            <RadioGroup
              defaultValue="featured"
              value={filters.sortBy}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, sortBy: value }))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="featured" id="featured" />
                <Label htmlFor="featured">Featured</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-low" id="price-low" />
                <Label htmlFor="price-low">Price: Low to High</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-high" id="price-high" />
                <Label htmlFor="price-high">Price: High to Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rating" id="rating" />
                <Label htmlFor="rating">Highest Rated</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="space-y-6 py-4">
                  <div>
                    <h3 className="font-medium mb-4">Categories</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="women-mobile"
                          checked={filters.category.includes("Women")}
                          onCheckedChange={() => toggleCategory("Women")}
                        />
                        <Label htmlFor="women-mobile">Women</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="men-mobile"
                          checked={filters.category.includes("Men")}
                          onCheckedChange={() => toggleCategory("Men")}
                        />
                        <Label htmlFor="men-mobile">Men</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="unisex-mobile"
                          checked={filters.category.includes("Unisex")}
                          onCheckedChange={() => toggleCategory("Unisex")}
                        />
                        <Label htmlFor="unisex-mobile">Unisex</Label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-4">Price Range</h3>
                    <Slider
                      defaultValue={[0, 200]}
                      max={200}
                      step={1}
                      value={filters.priceRange}
                      onValueChange={handlePriceChange}
                      className="mb-6"
                    />
                    <div className="flex items-center justify-between">
                      <span>${filters.priceRange[0]}</span>
                      <span>${filters.priceRange[1]}</span>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-4">Sort By</h3>
                    <RadioGroup
                      defaultValue="featured"
                      value={filters.sortBy}
                      onValueChange={(value) => setFilters((prev) => ({ ...prev, sortBy: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="featured" id="featured-mobile" />
                        <Label htmlFor="featured-mobile">Featured</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="price-low" id="price-low-mobile" />
                        <Label htmlFor="price-low-mobile">Price: Low to High</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="price-high" id="price-high-mobile" />
                        <Label htmlFor="price-high-mobile">Price: High to Low</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="rating" id="rating-mobile" />
                        <Label htmlFor="rating-mobile">Highest Rated</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative border rounded-lg overflow-hidden flex flex-col">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 dark:bg-black/60 rounded-full hover:bg-white dark:hover:bg-black"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-primary text-primary" : ""}`} />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <h3 className="font-medium text-lg">
                    <Link href={`/products/${product.id}`} className="hover:underline">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
