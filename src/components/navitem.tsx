import Link from "next/link";

interface ItemProps {
  href: string,
  content: string,
}

export function NavItem({ href, content }: ItemProps) {
  return (
    <li className="rounded-xl cursor-pointer transition-all hover:bg-violet-400 min-h-max p-2">
      <Link href={href} className="text-violet-500 transition-colors hover:text-white">
        { content }
      </Link>
    </li>
  )
}
