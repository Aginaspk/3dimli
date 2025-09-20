import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import Search from "./search";
import MbNavbar from "./MbNavbar";

const Navbar = () => {
  return (
    <>
      <MbNavbar />
      <div className="fixed top-0 z-20 w-full font-popins transition-transform duration-300 ease-in-out hidden lg:block">
        <div className="relative z-10 border-b border-neutral-200/70 bg-white dark:border-transparent dark:bg-neutral-900 transition-colors duration-300 ease-in-out">
          <div className="px-2 lg:px-14 w-full">
            <div className="flex h-16 justify-between items-center sm:h-20">
              <div className="flex items-center gap-x-3 sm:gap-x-8 flex-shrink-0">
                <Link
                  className="inline-block flex-shrink-0 text-primary-600 cursor-pointer mt-[5px]"
                  href={"/"}
                >
                  <div className="flex items-center">
                    <Image
                      width={20}
                      height={20}
                      alt="logo"
                      className="h-9 w-auto"
                      src={
                        "https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg"
                      }
                    />
                    <div className="ml-2 flex flex-col justify-center text-[10px] leading-none text-muted-foreground border-l dark:border-l-neutral-700 pl-2 h-full">
                      <span>BETA</span>
                      <span>1.0.1</span>
                    </div>
                  </div>
                </Link>
                <div className="hidden h-8 border-s border-neutral-200 md:block dark:border-neutral-700" />
                <div className="hidden sm:block">
                  <Menu />
                </div>
              </div>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
