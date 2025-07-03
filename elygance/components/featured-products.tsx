"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import { products } from "@/lib/products"

export function FeaturedProducts() {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<number[]>([])

  const featuredProducts = products.filter((product) => product.featured).slice(0, 6)

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProducts.map((product) => (
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
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="h-4 w-4" />
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
