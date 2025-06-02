import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
<Link to={`/post/${$id}`} className="block h-full">
  <div className="bg-[#a99b7d] rounded-xl p-4 flex flex-col h-full">
    
    {/* Aspect Ratio for image container */}
    <div className="w-full aspect-square relative mb-4">
      <img
        src={appwriteService.getFilePreview(featuredImage)}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
      />
    </div>

    {/* Title sticks to the bottom */}
    <div className="mt-auto">
      <h2 className="text-xl font-bold text-center text-[#383423]">
        {title}
      </h2>
    </div>
  </div>
</Link>


  )
}


export default PostCard