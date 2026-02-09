import Link from "next/link";

interface ItemProps {
  href: string,
  content: string,
}

export function NavItem({ href, content }: ItemProps) {
  return (
    <li className="rounded-lg cursor-pointer bg-violet-200 transition-all hover:bg-violet-300 min-h-max p-2 m-1">
      <Link href={href} className="text-violet-500 transition-colors hover:text-white">
        { content }
      </Link>
    </li>
  )
}
