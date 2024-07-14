import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

const BlogPage = () => {
 const [data, setData] = useState();
  useEffect(() => {
    fetchData()
      .then((e) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const fetchData = async () => {
    const dataRef = ref(db, "posts/");
    if (dataRef) {
      await onValue(
        dataRef,
        (snapshot) => {
          if (snapshot) {
            const retrievedData = snapshot.val();
            setData(retrievedData);
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4" >

      {data &&
          Object.values(data).map((item) => (
            <BlogCard  title={item.title} author={item.author} imgurl={item.imgurl} content={item.content} date={item.date} /> // Adjust based on your data structure
          ))}
    </div>
  );
};

export default BlogPage;
