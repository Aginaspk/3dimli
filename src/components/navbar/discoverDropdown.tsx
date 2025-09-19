"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import {
  TbBook,
  TbCube3dSphere,
  TbDeviceDesktop,
  TbLink,
  TbTexture,
  TbVideo,
  TbVolume,
} from "react-icons/tb";

const DiscoverDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="relative">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative"
      >
        <PopoverButton
          className={
            "text-opacity-80 group relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300 hover:cursor-pointer"
          }
        >
          Discover
        </PopoverButton>
        {isOpen && (
          <>
            <div className="absolute top-full left-0 right-0 h-16 bg-transparent" />
            <PopoverPanel
              static
              className="absolute top-14 mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-white dark:bg-[#262626] border border-neutral-200 dark:border-neutral-700 rounded-3xl shadow-lg py-3 z-50"
            >
              <div className="px-4 py-2 mb-2">
                <span className="text-lg font-bold text-neutral-800 dark:text-white">
                  Product Type
                </span>
              </div>
              <div className="px-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl"
                >
                  <TbCube3dSphere className="text-lg flex-shrink-0" />
                  <span>3D Models</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl"
                >
                  <TbBook className="text-lg flex-shrink-0" />
                  <span>EBooks</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl"
                >
                  <TbVolume className="text-lg flex-shrink-0" />
                  <span>Audio</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl"
                >
                  <TbLink className="text-lg flex-shrink-0" />
                  <span>Link</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl cursor-not-allowed"
                >
                  <TbDeviceDesktop className="text-lg flex-shrink-0" />
                  <span>Digital Products</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl cursor-not-allowed"
                >
                  <TbVideo className="text-lg flex-shrink-0" />
                  <span>Video</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl cursor-not-allowed"
                >
                  <TbTexture className="text-lg flex-shrink-0" />
                  <span>Texture Packs</span>
                </Link>
              </div>
            </PopoverPanel>
          </>
        )}
      </div>
    </Popover>
  );
};

export default DiscoverDropdown;