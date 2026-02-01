import { NavLink } from "../NavLink";

export default function Footer() {
  return (
    <div className="flex flex-col mt-20 md:m-10 md:flex-row justify-between items-center gap-5 w-full max-w-7xl mx-auto py-6 px-4 bg-violet-300">
      <div>
        <h1 className="text-white text-2xl font-extrabold text-center md:text-left">
          Violet Cycle
        </h1>
      </div>

      <div className="text-white text-center md:text-left">
        <p>Violet Cycle, All rights reserved</p>
      </div>

      <div>
        <ul className="flex flex-col md:flex-row md:gap-5 items-center">
          <NavLink href="/" name="Home" />
          <NavLink href="/contacts" name="Contacts" />
          <NavLink href="/dashboard" name="Dashboard" />
        </ul>
      </div>
    </div>
  );
}
