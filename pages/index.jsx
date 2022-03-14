import Head from 'next/head'
import Image from 'next/image'

import { Post, PostWidget, Category } from '../components'

const posts = [
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
]

const post_widgets = [
  { title: 'Post 1', slug: 'Something text' },
  { title: 'Post 1', slug: 'Something text' },
  { title: 'Post 1', slug: 'Something text' },
  { title: 'Post 1', slug: 'Something text' },
  { title: 'Post 1', slug: 'Something text' },
  { title: 'Post 1', slug: 'Something text' }
]

const categories = [
  { id: 1, name: 'category 1' },
  { id: 2, name: 'category 2' },
  { id: 3, name: 'category 3' },
  { id: 4, name: 'category 4' },
  { id: 5, name: 'category 5' },
]

const Home = () => {
  return (
    <>
      <Head>
        <title>NEV BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <div className="grid grid-cols-6 gap-5">
          {post_widgets.map((pw) => (
            <PostWidget pw={pw} key={pw.title} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-12">
          <main className="rounded-md bg-white md:col-span-8">
            <div>
              {posts.map((post) => (
                <Post post={post} key={post.title} />
              ))}
            </div>
          </main>

          <article className="col-span-1 rounded-md bg-white p-3 md:col-span-4 ">
            <ul>
              {categories.map((category) => (
                <Category category={category} key={category.id} />
              ))}
            </ul>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
