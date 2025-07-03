import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  const team = [
    {
      name: "Sophia Reynolds",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      bio: "With over 15 years in the fragrance industry, Sophia founded Elygance with a vision to create accessible luxury fragrances that tell a story.",
    },
    {
      name: "Marcus Chen",
      role: "Master Perfumer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      bio: "Trained in Grasse, France, Marcus brings his exceptional talent and global perspective to create our signature scents.",
    },
    {
      name: "Olivia Patel",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      bio: "Olivia oversees the brand's visual identity and ensures that every aspect of Elygance reflects our commitment to elegance and quality.",
    },
    {
      name: "James Wilson",
      role: "Head of Product Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      bio: "James leads our product innovation team, constantly exploring new ingredients and sustainable practices.",
    },
  ]

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Our Story</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover the passion and craftsmanship behind Elygance, where luxury meets artistry in every bottle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1595425964622-7e3250cb8b66?q=80&w=800&auto=format&fit=crop"
              alt="Elygance founder in the perfume laboratory"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Beginning</h2>
            <p className="text-muted-foreground">
              Founded in 2010, Elygance began as a small boutique in New York City with a simple mission: to create
              exceptional fragrances that capture moments, memories, and emotions.
            </p>
            <p className="text-muted-foreground">
              Our founder, Sophia Reynolds, had spent years working with leading perfume houses in Paris before deciding
              to create a brand that combined traditional craftsmanship with modern sensibilities.
            </p>
            <p className="text-muted-foreground">
              What started as a passion project has grown into a global brand, but our commitment to quality and
              artistry remains unchanged.
            </p>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Philosophy</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            At Elygance, we believe that fragrance is more than just a scent—it's an experience, a memory, and a form of
            self-expression.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We source the finest ingredients from around the world, ensuring that each fragrance meets our exacting
              standards.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-muted-foreground">
              We are committed to sustainable practices, from responsible sourcing to eco-friendly packaging and
              cruelty-free testing.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Artistry</h3>
            <p className="text-muted-foreground">
              We view perfumery as an art form, blending tradition with innovation to create fragrances that tell a
              story and evoke emotion.
            </p>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind Elygance who bring their expertise and creativity to every fragrance we
            create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative aspect-square mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <Separator className="my-16" />

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Commitment</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to creating exceptional fragrances while making a positive impact on our community and
            environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Sustainability Initiatives</h3>
            <p className="text-muted-foreground">
              We're committed to reducing our environmental footprint through sustainable sourcing, eco-friendly
              packaging, and carbon-neutral shipping.
            </p>
            <p className="text-muted-foreground">
              By 2025, we aim to have 100% recyclable packaging and achieve carbon neutrality across our entire supply
              chain.
            </p>
            <Button asChild variant="outline" className="mt-2">
              <Link href="/sustainability">
                Learn More About Our Initiatives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
              alt="Sustainable packaging process"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative aspect-video order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop"
              alt="Community outreach program"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h3 className="text-xl font-semibold">Community Engagement</h3>
            <p className="text-muted-foreground">
              We believe in giving back to the communities that support us. Through our Elygance Foundation, we support
              arts education and environmental conservation efforts.
            </p>
            <p className="text-muted-foreground">
              Each year, we donate 5% of our profits to organizations that align with our values and mission.
            </p>
            <Button asChild variant="outline" className="mt-2">
              <Link href="/community">
                Explore Our Community Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join the Elygance Family</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover our collection of luxury fragrances and become part of our story. Experience the artistry and
            passion that goes into every bottle.
          </p>
          <Button asChild size="lg">
            <Link href="/products">Shop Our Collection</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
