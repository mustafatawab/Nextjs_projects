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

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const categoryMap: Record<string, string> = {
    women: "Women",
    men: "Men",
    unisex: "Unisex",
    "gift-sets": "Gift Sets",
  }

  const categoryName = categoryMap[slug] || "All Products"
  const categoryDescription = getCategoryDescription(slug)

  const { addToCart } = useCart()
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<number[]>([])
  const [filters, setFilters] = useState({
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

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [value[0], value[1]] as [number, number],
    }))
  }

  const filteredProducts = products
    .filter((product) => {
      // Filter by category
      if (categoryName !== "All Products" && product.category !== categoryName) {
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
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold sm:text-4xl">{categoryName}</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{categoryDescription}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 space-y-6">
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

          <Separator />

          <div>
            <h3 className="font-medium mb-4">Notes</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="floral" />
                <Label htmlFor="floral">Floral</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="woody" />
                <Label htmlFor="woody">Woody</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="oriental" />
                <Label htmlFor="oriental">Oriental</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="fresh" />
                <Label htmlFor="fresh">Fresh</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="citrus" />
                <Label htmlFor="citrus">Citrus</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-muted-foreground">{filteredProducts.length} products</span>
            </div>

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

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-4">Notes</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="floral-mobile" />
                        <Label htmlFor="floral-mobile">Floral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="woody-mobile" />
                        <Label htmlFor="woody-mobile">Woody</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="oriental-mobile" />
                        <Label htmlFor="oriental-mobile">Oriental</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fresh-mobile" />
                        <Label htmlFor="fresh-mobile">Fresh</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="citrus-mobile" />
                        <Label htmlFor="citrus-mobile">Citrus</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
            </div>
          ) : (
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
                      <Heart
                        className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-primary text-primary" : ""}`}
                      />
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
          )}
        </div>
      </div>
    </div>
  )
}

function getCategoryDescription(slug: string): string {
  switch (slug) {
    case "women":
      return "Discover our collection of elegant and sophisticated fragrances designed specifically for women. From floral to oriental, find your signature scent."
    case "men":
      return "Explore our range of bold and distinctive fragrances crafted for men. From woody to fresh, discover scents that make a statement."
    case "unisex":
      return "Browse our selection of versatile fragrances designed to be enjoyed by everyone. These unique scents transcend traditional gender boundaries."
    case "gift-sets":
      return "Find the perfect present with our curated gift sets. These collections offer a variety of fragrances and complementary products for a special treat."
    default:
      return "Explore our complete collection of luxury fragrances, crafted with the finest ingredients to create memorable scents for every occasion."
  }
}
