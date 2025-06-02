import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8 '>
        <Container >
            <div className='flex items-center justify-center'>
  <div className="flex flex-row flex-wrap items-stretch justify-center w-[90%]">
    {posts.map((post) => (
      <div
        key={post.$id}
        className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <PostCard {...post} />
      </div>
    ))}
  </div>
  </div>
</Container>

    </div>
  )
}

export default AllPosts