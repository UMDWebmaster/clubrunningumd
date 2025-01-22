import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";
import "../CSS/umd-fonts.css";
import { Link } from 'react-router-dom';

export default function BlogFeed(){
    const [posts,setPosts] = useState([]);
    const [isSetFlag,setFlag] = useState(false);
    if(!isSetFlag){
    setFlag(true);
    axios.get('https://marylandclubrunningblogapi.vercel.app/get_feed')
    .then(resp=> setPosts(resp.data))
    }
    return(
        <>
        <center>
  <div className="relative">
    {/* Image Container */}
    <div className="teamPic-container">
      <img 
        src="/static/media/fredHalfTeam.dd0204a7949f7659d973.JPG" 
        alt="Team" 
        className="teamPic w-full h-auto"
      />
    </div>

    {/* Banner Overlay */}
    <div className="wallsmith absolute w-full bg-black bottom-[-10px] left-1/2 transform -translate-x-1/2 text-center">
      <h1 className="text-9xl text-yellow-300 font-bold">The Blog</h1>
      <a 
        href="#"
        className="text-white font-sans text-xl mt-2 inline-block"
      >
        Login
      </a>
    </div>
  </div>
</center>

       {(
        posts.map(post =>(
            <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500">
               
                <span class="text-sm">{post.date}</span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{post.title}</a></h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                    <span class="font-medium dark:text-white">
                        {post.writer_id}
                    </span>
                </div>
                <Link to={`/article/${post.post_id}`} className="text-blue-500">
            Read More
          </Link>
            </div>
        </article> 

        ))
       )}

        </>
    )
}

