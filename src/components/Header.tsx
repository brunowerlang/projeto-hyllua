import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Clínica Hyllua</h1>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-blue-600">Início</Link>
          </li>
          <li>
            <Link href="/clinica" className="hover:text-blue-600">Clínica</Link>
          </li>
          <li>
            <Link href="/ensino" className="hover:text-blue-600">Ensino</Link>
          </li>
          <li>
            <Link href="/hyllua-beauty" className="hover:text-blue-600">Hyllua Beauty</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
