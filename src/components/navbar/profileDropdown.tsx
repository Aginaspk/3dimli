"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import {
  TbBulb,
  TbCube3dSphere,
  TbQuestionMark,
  TbUser,
  TbUserPlus,
} from "react-icons/tb";

const ProfileDropdown = () => {
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
            "flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none sm:h-12 sm:w-12 dark:text-neutral-300 dark:hover:bg-neutral-800 border border-gray-300 dark:border-neutral-700 px-3 cursor-pointer"
          }
        >
          <TbUser className="" />
        </PopoverButton>
        {isOpen && (
          <>
            <div className="absolute top-full left-0 right-0 h-16 bg-transparent" />
            <PopoverPanel
              static
              className="absolute top-14 mt-2 right-1/4 transform translate-x-1/4 w-64 bg-white dark:bg-[#262626] border border-neutral-200 dark:border-neutral-700 rounded-3xl shadow-lg py-3 z-50"
            >
              <div className="px-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl"
                >
                  <TbCube3dSphere className="text-lg flex-shrink-0" />
                  <span>Sign up</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl"
                >
                  <TbUserPlus className="text-lg flex-shrink-0" />
                  <span>Sign in</span>
                </Link>

                <div className="w-full border border-neutral-700" />
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl"
                >
                  <TbBulb className="text-lg flex-shrink-0" />
                  <span>Dark Mode</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl"
                >
                  <TbQuestionMark className="text-lg flex-shrink-0" />
                  <span>FAQ</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl"
                >
                  <TbQuestionMark className="text-lg flex-shrink-0" />
                  <span>Help</span>
                </Link>
              </div>
            </PopoverPanel>
          </>
        )}
      </div>
    </Popover>
  );
};

export default ProfileDropdown;
