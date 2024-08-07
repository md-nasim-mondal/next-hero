import { getPosts } from "@/services/postApi"
import Link from "next/link"
import React from "react"

const PostPage = async () => {
  const postsData = await getPosts()
  // console.log(postsData)
  return (
    <div className='min-h-screen'>
      <h6>All Posts</h6>
      <div className='grid grid-cols-4 gap-6'>
        {postsData?.slice(0, 20)?.map(({ id, title, body }) => (
          <div key={id} className='border-2 p-6'>
            <h6>Title: {title}</h6>
            <h6>Description: {body}</h6>
            <button>
              <Link href={`/posts/${id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostPage
