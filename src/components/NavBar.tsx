import Link from "next/link";

// interface NavProps {}

export default function NavBar() {
  return (
    <nav className="flex justify-center bg-violet-300 w-6xl h-14 mt-3 rounded-2xl items-center">
      <ul className="flex justify-between gap-5">
        <Link href="/">Home</Link>
        <Link href="/contacts">Contacts</Link>
        <Link href="/dashboard">Dashboard</Link>
      </ul>
    </nav>
  );
}
