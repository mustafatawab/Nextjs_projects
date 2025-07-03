import Link from "next/link"
import Image from "next/image"

export function CategorySection() {
  const categories = [
    {
      name: "Women's Fragrances",
      image: "https://images.unsplash.com/photo-1615375834706-87d6f9fdb1b3?q=80&w=800&auto=format&fit=crop",
      href: "/categories/women",
    },
    {
      name: "Men's Fragrances",
      image: "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?q=80&w=800&auto=format&fit=crop",
      href: "/categories/men",
    },
    {
      name: "Unisex Fragrances",
      image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=800&auto=format&fit=crop",
      href: "/categories/unisex",
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Shop by Category</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px]">
            Find the perfect fragrance for every occasion and preference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <p className="mt-2 text-white/80 text-sm">Shop Now</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
