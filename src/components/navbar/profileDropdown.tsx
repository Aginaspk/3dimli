"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  TbBulb,
  TbCube3dSphere,
  TbQuestionMark,
  TbUser,
  TbUserPlus,
} from "react-icons/tb";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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

                <div className="w-full border-t border-neutral-200 dark:border-neutral-700 my-2" />
                
                <button
                  onClick={toggleDarkMode}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors rounded-3xl text-left"
                >
                  <div className="flex items-center gap-3">
                    <TbBulb className="text-lg flex-shrink-0" />
                    <span>Dark Mode</span>
                  </div>
                  <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                    isDarkMode ? 'bg-neutral-700 dark:bg-neutral-400' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                      isDarkMode ? 'translate-x-5' : 'translate-x-1'
                    }`} />
                  </div>
                </button>
                
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