"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import { products } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  if (!product) {
    return <div className="container py-12 text-center">Product not found</div>
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleFavorite = () => setIsFavorite((prev) => !prev)

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg border">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square relative overflow-hidden rounded-lg border cursor-pointer">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({Math.floor(Math.random() * 100) + 50} reviews)
              </span>
            </div>
          </div>

          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

          <Separator />

          <div>
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Size</h3>
            <p className="text-muted-foreground">{product.size}</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Category</h3>
            <p className="text-muted-foreground">{product.category}</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Quantity</h3>
            <div className="flex items-center">
              <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1" onClick={toggleFavorite}>
              <Heart className={`h-5 w-5 mr-2 ${isFavorite ? "fill-primary text-primary" : ""}`} />
              {isFavorite ? "Added to Wishlist" : "Add to Wishlist"}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-4 border rounded-b-lg mt-2">
            <div className="space-y-4">
              <p>{product.description}</p>
              <p>
                Experience the captivating allure of {product.name}, a fragrance that embodies sophistication and
                elegance. Crafted with the finest ingredients, this scent creates a unique signature that lasts
                throughout the day.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="details" className="p-4 border rounded-b-lg mt-2">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Notes</h3>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  {product.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Size</h3>
                <p className="text-muted-foreground mt-2">{product.size}</p>
              </div>
              <div>
                <h3 className="font-medium">Category</h3>
                <p className="text-muted-foreground mt-2">{product.category}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-4 border rounded-b-lg mt-2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">{product.rating}</span>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground mt-1">
                    {Math.floor(Math.random() * 100) + 50} reviews
                  </span>
                </div>
                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2">
                      <span className="text-sm w-2">{rating}</span>
                      <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: `${rating === Math.floor(product.rating) ? "60%" : rating > Math.floor(product.rating) ? "10%" : "30%"}`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Sample Reviews */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Sarah J.</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">2 weeks ago</div>
                  </div>
                  <p className="text-muted-foreground">
                    This fragrance is absolutely divine! The scent lasts all day and I receive compliments every time I
                    wear it. The packaging is also beautiful and makes it a perfect gift.
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Michael T.</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">1 month ago</div>
                  </div>
                  <p className="text-muted-foreground">
                    Great fragrance with excellent longevity. The only reason I'm giving it 4 stars instead of 5 is that
                    the scent is a bit stronger than I expected. Still, it's become one of my favorites.
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Emily R.</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">3 months ago</div>
                  </div>
                  <p className="text-muted-foreground">
                    I've tried many fragrances over the years, and this one stands out as truly exceptional. The
                    complexity of the notes creates a unique scent that evolves beautifully throughout the day.
                    Definitely worth the investment!
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
