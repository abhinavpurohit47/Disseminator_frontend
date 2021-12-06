import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <div>

        
        <div className="flex flex-col text-medium items-center ">
            <p>Made By</p>
            <p className="text-bold text-lg">Abhinav Purohit</p>
        </div>
         <div className="flex justify-around w-9/12 mx-auto my-5 text-purple md:w-full ">
         <a href="https://www.instagram.com/purohit.abhinav01/">
           <AiFillInstagram className="w-8 hover:text-yellow-500 h-8 cursor-pointer" />
         </a>
         <a href="https://www.linkedin.com/in/abhinav-ap047/">
           <AiFillLinkedin className="w-8 hover:text-yellow-500 h-8 cursor-pointer" />
         </a>
         <a href="https://www.github.com/abhinavpurohit47">
           <AiFillGithub className="w-8 hover:text-yellow-500 h-8 cursor-pointer" />{" "}
         </a>
       </div>
       </div>
    )
}

export default Footer
