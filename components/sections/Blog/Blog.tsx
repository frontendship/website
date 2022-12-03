import React from 'react'
import { Title, BlogCard } from 'components'

const Blog = () => {
  return (
    <section className="w-full p-28 bg-red-400">
      <div className="flex flex-col justify-center items-start">
        <Title level={2}> Latest Blog Posts </Title>
      </div>
      {/*title-end*/}
      <BlogCard />
      <div className="">
        <div></div>
        {/*main-banner-end*/}
        <div></div>
        {/*main-banner-text-end*/}
      </div>
      {/*main-end*/}
    </section>
  )
}

export default Blog
