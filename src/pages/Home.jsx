import React, {useEffect, useState} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
import BlogLandingPage from '../pages/Landing'

function Home() {

    const [posts, setPosts]= useState([])

    useEffect(() => {
        appwriteService.getPosts()
        .then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

    if (posts.length === 0) {
        return (
            <div className="w-full text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className=" w-full min-h-60">
                                        <h1 className="text-2xl font-bold hover:text-gray-500">
                                <Link to="/login">
                                <BlogLandingPage/>
                                </Link>
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home