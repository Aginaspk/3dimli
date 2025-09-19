import Link from "next/link";
import DiscoverDropdown from "./discoverDropdown";

const Menu = () => {
  return (
    <div className="">
      <div className="relative cursor-pointer">
        <ul className="items-center hidden lg:flex">
          <li className="relative focus:outline-none focus:ring-0">
            <Link
              className="text-opacity-80 relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300"
              href={"/"}
            >
              <span>Home</span>
            </Link>
          </li>
          <DiscoverDropdown />
          <li>
            <Link
              className="text-opacity-80 relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300"
              href={"/"}
            >
              <span>Features</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-opacity-80 relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300"
              href={"/"}
            >
              <span>Pricing</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
