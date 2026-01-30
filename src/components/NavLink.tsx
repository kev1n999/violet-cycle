import Link from "next/link";

export interface LinkProps {
  href: string;
  name: string;
}

export function NavLink({ href, name }: LinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="block w-full text-white transition-all duration-200 hover:text-violet-200 text-center"
      >
        {name}
      </Link>
    </li>
  );
}
