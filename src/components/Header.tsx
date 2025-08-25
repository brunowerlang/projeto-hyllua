export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Clínica Hyllua</h1>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-blue-600">Início</a></li>
          <li><a href="/clinica" className="hover:text-blue-600">Clínica</a></li>
          <li><a href="/ensino" className="hover:text-blue-600">Ensino</a></li>
          <li><a href="/hyllua-beauty" className="hover:text-blue-600">Hyllua Beauty</a></li>
          <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}
