// src/app/blog/SidebarCategories.tsx
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface SidebarProps {
  categories: Category[];
}

export default function SidebarCategories({ categories }: SidebarProps) {
  return (
    <aside className="w-64 hidden md:block">
      <h3 className="text-xl font-bold mb-4">Categorias</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              href={`/blog/category/${cat.slug}`}
              className="text-gray-700 hover:text-blue-600"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

