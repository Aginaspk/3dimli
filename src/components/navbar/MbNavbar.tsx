import Image from "next/image";
import Link from "next/link";

const MbNavbar = () => {
  return (
    <div className="lg:hidden fixed top-0 z-[999] font-popins transition-transform duration-300 ease-in-out w-full inline-flex justify-between items-center p-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-b border-neutral-200/70 bg-white dark:border-transparent dark:bg-neutral-900 h-14  ">
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
    </div>
  );
};

export default MbNavbar;
