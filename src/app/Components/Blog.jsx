'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";


const Blog =  () => {
  const [blogData,setblogData] = useState([])
  const router = useRouter();


   useEffect(()=>{
    fetch("https://basic-blog.teamrabbil.com/api/post-newest")
    .then(res => res.json())
    .then(data=>setblogData(data))
   },[])

  const handleItemClick = (id) => {
    router.push(`/blog/${id}`);
  };

 // console.log(blogData);
  return (
    <div className="grid md:grid-cols-3 ml-10 sm:grid-cols-1 gap-3">
       
        {
            blogData.map((blog,index)=><div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                src={blog.img}
                width={384}
                height={400}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
             
              <div className="card-actions">
                <button onClick={()=>handleItemClick(blog.id)} className="btn btn-primary  btn-block">See Blog</button>
              </div>
            </div>
          </div>)
        }
      
    </div>
  );
};

export default Blog;
