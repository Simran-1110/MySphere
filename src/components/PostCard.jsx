import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block h-full transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="bg-[#a99b7d] rounded-xl p-4 flex flex-col h-full shadow-sm hover:shadow-lg transition-all  duration-300">
        
        {/* Image container with hover zoom */}
        <div className="w-full aspect-square relative mb-4 overflow-hidden rounded-xl">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
          {/* Optional overlay effect */}
          <div className="absolute inset-0 bg-black/10 opacity hover:opacity-10 transition duration-300 rounded-xl"></div>
        </div>

        {/* Title */}
        <div className="mt-auto">
          <h2 className="text-xl font-bold text-center text-[#383423] transition-colors duration-300">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
