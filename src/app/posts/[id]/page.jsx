import React from "react"

const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id)
  return (
    <div>
      <h6>Title : {title}</h6>
      <p>Description : {body}</p>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  )

  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default PostDetailsPage
