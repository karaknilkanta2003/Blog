import React, { useEffect, useState } from "react";
import { uid } from 'uid';
import {  ref, set } from "firebase/database";
import { db } from "../firebase";


function AddBlog({isOpen,onClose}) {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [imgurl, setImgurl] = useState();
  const [content, setContent] = useState();
  const [date,setDate] = useState();
  const [time,setTime] = useState()
  const [id,setId] = useState();
  
  const genuid = () => {
    const uuid = uid();
    setId(uuid)
  }

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    setTime(today.toLocaleTimeString())
    setDate(`${month}/${date}/${year} ${time}`);
  }
  
  useEffect(()=>{
    getDate()
  genuid();
  },[])

  function handlesubmit(e) {
    e.preventDefault()
    getDate()
    genuid()
    console.log(title,author,imgurl,content,id,date,time)
    upload();
  }

  function upload() {
    set(ref(db, 'posts/' + id), {
      title: title,
      author: author,
      imgurl : imgurl,
      content: content,
      date: date
    }).then(()=>{
      alert("Success")
      console.log("Success")
    }).catch((e)=>{
      alert(e)
      console.log(e)
    });
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          {/**Model Contet */}
          <h2 className="text-xl font-semibold mt-6 mb-5 uppercase">
            Please Login here
          </h2>
          <form className="px-4">
            {/**Email */}
            <div>
              <input
                type="text"
                placeholder="title text"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1]"
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="author"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1]"
                onChange={(e)=>setAuthor(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="img url"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1]"
                onChange={(e)=>setImgurl(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="content"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1]"
                onChange={(e)=>setContent(e.target.value)}
              />
            </div>
            <div>
              <button className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none"
              onClick={(e) =>handlesubmit(e)}>
                Submit
              </button>
            </div>
          </form>

          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text0gray-800 font-semibold inline-flex items-center mt-8 px-8 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
