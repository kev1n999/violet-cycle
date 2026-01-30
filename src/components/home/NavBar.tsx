import Link from "next/link";

// interface NavProps {}

export default function NavBar() {
  return (
    <nav className="flex justify-between bg-violet-300 min-w-6xl h-14 mt-3 rounded-2xl items-center px-6">
      <div className="flex items-center">
        <img src="/main_logo.png" alt="Logo" className="h-16 w-auto" />
        <h1 className="text-white relative bottom-1 text-2xl font-extrabold right-5">
          Violet Cycle
        </h1>
      </div>

      <ul className="flex justify-between gap-6">
        <li>
          <Link
            href="/"
            className="text-white transition-all duration-200 hover:text-violet-200"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/contacts"
            className="text-white transition-all duration-200 hover:text-violet-200"
          >
            Contacts
          </Link>
        </li>

        <li>
          <Link
            href="/dashboard"
            className="text-white transition-all duration-200 hover:text-violet-200"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
