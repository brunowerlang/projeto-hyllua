export interface Post {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  date?: string
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>
    author?: Array<{ name: string }>
    "wp:term"?: Array<Array<{ id: number; name: string; taxonomy: string }>>
  }
}

export interface Category {
  id: number
  name: string
  slug: string
}
