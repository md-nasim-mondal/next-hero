import AboutContents from "@/components/AboutContents"
import React from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

// export const metaData = {
//   title: "About",
//   description: "Meals About Page",
// }


// Here cache no store use for update time or anything in every time ({{cache: "no-store"}}). and if we want to refresh time or something after a certain time we can use ({next : {revalidate : {dynamic time in second}}})

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", { cache: "no-store" })
  const data = await res.json()
  return data?.currentTime
}

const AboutPage = async () => {
  const session = await getServerSession(authOptions)
  console.log({session});
  const currentTime = await getTime()

  return (
    <div>
      <h6 className='text-3xl'>About Page</h6>
      <AboutContents />
      <h3 className='text-3xl text-red-400 mt-12'>Time : {currentTime} </h3>
    </div>
  )
}

export default AboutPage
