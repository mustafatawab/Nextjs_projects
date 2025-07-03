import Image from "next/image"
import Link from "next/link"

export default function CategoriesPage() {
  const categories = [
    {
      name: "Women's Fragrances",
      description: "Elegant and sophisticated scents designed for women",
      image: "https://images.unsplash.com/photo-1615375834706-87d6f9fdb1b3?q=80&w=800&auto=format&fit=crop",
      href: "/categories/women",
      count: 5,
    },
    {
      name: "Men's Fragrances",
      description: "Bold and distinctive scents crafted for men",
      image: "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?q=80&w=800&auto=format&fit=crop",
      href: "/categories/men",
      count: 4,
    },
    {
      name: "Unisex Fragrances",
      description: "Versatile scents designed to be enjoyed by everyone",
      image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=800&auto=format&fit=crop",
      href: "/categories/unisex",
      count: 4,
    },
    {
      name: "Gift Sets",
      description: "Curated collections perfect for gifting",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
      href: "/categories/gift-sets",
      count: 2,
    },
  ]

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Browse by Category</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of luxury fragrances organized by category to find your perfect scent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link key={category.name} href={category.href} className="group relative overflow-hidden rounded-lg border">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                <p className="mt-2 text-white/80">{category.description}</p>
                <p className="mt-2 text-white/90 font-medium">{category.count} Products</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Shop by Collection</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover our specially curated collections designed for different occasions and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg border aspect-[3/4] group">
            <Image
              src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop"
              alt="Summer Collection"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white">Summer Collection</h3>
              <p className="mt-2 text-white/80">Light and refreshing scents perfect for warm days</p>
              <Link href="/collections/summer" className="mt-4 inline-block text-white font-medium hover:underline">
                Explore Collection
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border aspect-[3/4] group">
            <Image
              src="https://images.unsplash.com/photo-1592945403407-9caf930b2c6c?q=80&w=800&auto=format&fit=crop"
              alt="Luxury Collection"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white">Luxury Collection</h3>
              <p className="mt-2 text-white/80">Premium fragrances crafted with rare ingredients</p>
              <Link href="/collections/luxury" className="mt-4 inline-block text-white font-medium hover:underline">
                Explore Collection
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border aspect-[3/4] group">
            <Image
              src="https://images.unsplash.com/photo-1605651531144-51381895e23d?q=80&w=800&auto=format&fit=crop"
              alt="Signature Collection"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white">Signature Collection</h3>
              <p className="mt-2 text-white/80">Our most iconic and beloved fragrances</p>
              <Link href="/collections/signature" className="mt-4 inline-block text-white font-medium hover:underline">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-muted/50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Find Your Perfect Scent</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Not sure where to start? Discover fragrances based on your preferences and personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/quiz"
            className="bg-card border rounded-lg p-6 text-center hover:border-primary transition-colors"
          >
            <h3 className="font-semibold mb-2">Fragrance Quiz</h3>
            <p className="text-sm text-muted-foreground">
              Take our quiz to find your perfect match based on your preferences
            </p>
          </Link>

          <Link
            href="/bestsellers"
            className="bg-card border rounded-lg p-6 text-center hover:border-primary transition-colors"
          >
            <h3 className="font-semibold mb-2">Bestsellers</h3>
            <p className="text-sm text-muted-foreground">Explore our most popular fragrances loved by customers</p>
          </Link>

          <Link
            href="/new-arrivals"
            className="bg-card border rounded-lg p-6 text-center hover:border-primary transition-colors"
          >
            <h3 className="font-semibold mb-2">New Arrivals</h3>
            <p className="text-sm text-muted-foreground">Discover our latest fragrances and limited editions</p>
          </Link>

          <Link
            href="/samples"
            className="bg-card border rounded-lg p-6 text-center hover:border-primary transition-colors"
          >
            <h3 className="font-semibold mb-2">Sample Sets</h3>
            <p className="text-sm text-muted-foreground">Try before you buy with our curated sample collections</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
