import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import { Blogcontext } from "../context/Context";

const BlogCard = ({ title, author, imgurl, content, date }) => {
  const navigate = useNavigate()
  const cont = useContext(Blogcontext)
  const handleclick = () =>{
    cont.setBlogimg(imgurl)
    cont.setBlogAuthor(author)
    cont.setBlogtitle(title)
    cont.setBlogContent(content)
    cont.setBlogdate(date)
    navigate("/blogs");
  }
  return (
    <div className="flex ">
      <button
        onClick={handleclick}
        className="p-5 shadow-lg rounded cursor-pointer"
      >
        <div>
          <img src={imgurl || "img"} alt="" className="w-full" />
        </div>
        <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
          {title || "title"}
        </h3>
        <p className="mb-2 text-gray-600">
          <FaUser className="inline-flex items-center mr-2" />
          {author || "author"}
        </p>
        <p className="text-sm text-gray-500">Pulished: {date || "date"}</p>
      </button>
    </div>
  );
};

export default BlogCard;
