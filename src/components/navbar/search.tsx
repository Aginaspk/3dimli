import Link from "next/link";
import {
  TbBrandDiscordFilled,
  TbSearch,
  TbUpload,
  TbUser,
} from "react-icons/tb";
import { ShinyButton } from "../ui/shiny-button";
import ProfileDropdown from "./profileDropdown";

const Search = () => {
  return (
    <div className="inline-flex items-center justify-end w-full gap-1 lg:gap-2">
      <div className="w-full">
        <form action="">
          <div className="relative">
            <div className="inline-flex w-full h-10 py-2 justify-between rounded-lg border bg-transparent gap-1 text-sm border-neutral-200 dark:border-neutral-700 focus:ring-1 focus:ring-slate-500 focus:border-slate-500">
              <input
                type="text"
                className="pl-3 bg-transparent pr-1 border-none ring-0 w-full placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 dark:focus:ring-slate-400 dark:focus:border-slate-400 z-20 rounded-full"
              />
              <button className="cursor-pointer flex items-center justify-center w-fit border-l  border-neutral-200 dark:border-neutral-700 dark:border-l-neutral-700 px-3 z-20">
                <TbSearch className="shrink-0 size-4 text-gray-400 dark:text-white/60" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="self-center md:flex">
        <Link className="" href={"/"}>
          <button className="bg-[#5865F2] dark:bg-gradient-to-bl dark:from-[#0E1C33] dark:to-[#1a2f4a] text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-3 hover:bg-[#4752c4] dark:hover:bg-gradient-to-bl dark:hover:from-[#132642] dark:hover:to-[#1f3555] transition-all duration-300 ease-in-out text-base relative overflow-hidden group">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>

            <TbBrandDiscordFilled size={30} className="relative z-10" />
            <span className="font-medium tracking-wide relative z-10 cursor-pointer">
              Discord
            </span>
          </button>
        </Link>
      </div>
      <ShinyButton className="">
        <TbUpload className="mr-2 inline-block relative z-10" />
        <span className="relative z-10 text-xs md:text-sm">Upload</span>
      </ShinyButton>
      <div className="">
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none sm:h-12 sm:w-12 dark:text-neutral-300 dark:hover:bg-neutral-800 ">
          <div className="">
            <ProfileDropdown />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Search;
