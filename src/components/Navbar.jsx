"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React from "react"

const Navbar = () => {
  const pathName = usePathname()
  const router = useRouter()

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
  ]

  const handler = () => {
    router.push("/login")
  }

  if (pathName.includes("dashboard"))
    return <div className='bg-green-400'>Dashboard Layout</div>
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
      <button onClick={handler} className='bg-white text-cyan-300 p-4'>
        Login
      </button>
    </nav>
  )
}

export default Navbar
