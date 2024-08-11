"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();

  console.log(session);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handler = () => {
    router.push("api/auth/signin");
  };

  // if (pathName.includes("dashboard"))
  //   return <div className='bg-green-400'>Dashboard Layout</div>;
  return (
    <nav className='bg-red-500 px-6 py-4 flex justify-between items-center'>
      <h6 className='text-3xl'>
        Next <span className='text-cyan-300'>Hero</span>
      </h6>
      <ul className='flex justify-between items-center space-x-4'>
        {links?.map((link) => (
          <Link
            className={`${pathName === link?.path && "text-cyan-300"}`}
            key={link.path}
            href={link.path}>
            {link.title}
          </Link>
        ))}
      </ul>

      <div>
        {session?.status !== "authenticated" ? (
          <>
            <Link href={"/api/auth/signup"}>
              <button
                onClick={handler}
                className='bg-red-400 text-white p-4 mr-4
              rounded-md'>
                Sign UP
              </button>
            </Link>
            <button
              onClick={handler}
              className='bg-red-400 text-white p-4 rounded-md'>
              Login
            </button>
          </>
        ) : (
          <div className='flex gap-4 items-center'>
            <h6>
              {session?.data?.user?.name}
              <br />
              {session?.data?.user?.type}
            </h6>
            <Image
              src={session?.data?.user?.image}
              height={50}
              width={50}
              alt={session?.data?.user?.name}
              className='rounded-full w-10 h-10 mx-auto'
            />
            <button
              onClick={() => signOut()}
              className='bg-red-400
         text-white p-4 rounded-xl hover:text-black'>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
