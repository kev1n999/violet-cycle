import Link from "next/link";

// interface NavProps {}

export default function NavBar() {
  return (
    <nav className="flex justify-center bg-violet-300 w-6xl h-14 mt-3 rounded-2xl items-center">
      <ul className="flex justify-between gap-5">
        <Link href="/" className="text-white transition-all duration-200 hover:text-violet-200">Home</Link>
        <Link href="/contacts" className="text-white transition-all duration-200 hover:text-violet-200">Contacts</Link>
        <Link href="/dashboard" className="text-white transition-all duration-200 hover:text-violet-200">Dashboard</Link>
      </ul>
    </nav>
  );
}
