import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between gap-5 w-7xl mt-20 bg-violet-300 items-center p-5">
      <div>
        <img src="/main_logo.png" alt="Logo" className="h-18 w-auto" />
      </div>

      <div className="flex justify-center text-white">
        <p>Violet Cycle, All rights reserved</p>
      </div>

      <div className="flex flex-col">
        <ul className="flex justify-center gap-5">
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
              href="/register"
              className="text-white transition-all duration-200 hover:text-violet-200"
            >
              Start now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
