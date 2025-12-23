export interface User {
  id: string
  email: string
  username: string
  full_name: string
  bio: string
  avatar_url: string
}

export interface ImageData {
  id: string
  title: string
  description: string
  image_url: string
  is_published: boolean
  created_at: string
  user: User
  tags?: string[]
  category?: string
}

export const mockUsers: User[] = [
  {
    id: "1",
    email: "john@example.com",
    username: "johnphoto",
    full_name: "John Smith",
    bio: "Landscape photographer capturing nature's beauty",
    avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "2",
    email: "sarah@example.com",
    username: "sarahsnaps",
    full_name: "Sarah Johnson",
    bio: "Street photography enthusiast from NYC",
    avatar_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "3",
    email: "mike@example.com",
    username: "mikecaptures",
    full_name: "Mike Wilson",
    bio: "Portrait and wedding photographer",
    avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "4",
    email: "emma@example.com",
    username: "emmavisuals",
    full_name: "Emma Davis",
    bio: "Architecture and urban photography",
    avatar_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

export const mockImages: ImageData[] = [
  {
    id: "1",
    title: "Mountain Sunrise",
    description:
      "A breathtaking sunrise over the Rocky Mountains captured during my morning hike. The golden light illuminating the peaks creates a magical atmosphere.",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-15T08:00:00Z",
    user: mockUsers[0],
    tags: ["nature", "landscape", "sunrise", "mountains"],
    category: "nature",
  },
  {
    id: "2",
    title: "City Lights",
    description: "The bustling energy of downtown at night with vibrant neon reflections on wet streets after rain.",
    image_url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-14T20:30:00Z",
    user: mockUsers[1],
    tags: ["street", "night", "urban", "neon"],
    category: "street",
  },
  {
    id: "3",
    title: "Ocean Waves",
    description:
      "Powerful waves crashing against the rocky coastline during golden hour, showcasing nature's raw power.",
    image_url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-13T18:45:00Z",
    user: mockUsers[0],
    tags: ["ocean", "waves", "seascape", "golden hour"],
    category: "nature",
  },
  {
    id: "4",
    title: "Forest Path",
    description: "A mysterious path winding through an ancient forest covered in morning mist, inviting exploration.",
    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-12T07:15:00Z",
    user: mockUsers[2],
    tags: ["forest", "path", "mist", "nature"],
    category: "nature",
  },
  {
    id: "5",
    title: "Urban Portrait",
    description: "Street portrait capturing the essence of city life and human connection in the urban environment.",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-11T16:20:00Z",
    user: mockUsers[1],
    tags: ["portrait", "street", "urban", "people"],
    category: "portrait",
  },
  {
    id: "6",
    title: "Desert Sunset",
    description: "Vibrant colors painting the sky over endless sand dunes in the Sahara Desert.",
    image_url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-10T19:00:00Z",
    user: mockUsers[2],
    tags: ["desert", "sunset", "dunes", "landscape"],
    category: "landscape",
  },
  {
    id: "7",
    title: "Winter Landscape",
    description: "Snow-covered peaks reflecting in a crystal-clear alpine lake during the quiet winter season.",
    image_url: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=800&h=800&fit=crop",
    is_published: false,
    created_at: "2024-01-09T11:30:00Z",
    user: mockUsers[0],
    tags: ["winter", "snow", "lake", "mountains"],
    category: "landscape",
  },
  {
    id: "8",
    title: "Flower Macro",
    description: "Delicate petals captured in stunning detail with morning dew drops creating natural diamonds.",
    image_url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-08T09:45:00Z",
    user: mockUsers[1],
    tags: ["macro", "flower", "dew", "nature"],
    category: "macro",
  },
  {
    id: "9",
    title: "Architecture Lines",
    description: "Modern architecture with clean lines and geometric patterns creating visual harmony.",
    image_url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-07T14:20:00Z",
    user: mockUsers[3],
    tags: ["architecture", "modern", "lines", "geometric"],
    category: "architecture",
  },
  {
    id: "10",
    title: "Coffee Culture",
    description: "The art of coffee making captured in a cozy café setting with warm ambient lighting.",
    image_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-06T10:30:00Z",
    user: mockUsers[1],
    tags: ["coffee", "lifestyle", "café", "warm"],
    category: "lifestyle",
  },
  {
    id: "11",
    title: "Wildlife Portrait",
    description: "Majestic lion captured in its natural habitat during the golden hour in African savanna.",
    image_url: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-05T17:45:00Z",
    user: mockUsers[2],
    tags: ["wildlife", "lion", "africa", "safari"],
    category: "wildlife",
  },
  {
    id: "12",
    title: "Minimalist Interior",
    description: "Clean, minimalist interior design showcasing the beauty of simplicity and natural light.",
    image_url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
    is_published: true,
    created_at: "2024-01-04T13:15:00Z",
    user: mockUsers[3],
    tags: ["interior", "minimalist", "design", "light"],
    category: "architecture",
  },
]

// Mock current user (simulating logged in state)
export const mockCurrentUser: User = mockUsers[0]

// Mock authentication state
export const mockAuthState = {
  isAuthenticated: true,
  user: mockCurrentUser,
}
