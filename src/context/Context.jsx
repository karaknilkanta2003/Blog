import React, { createContext, useState } from 'react'

export const Blogcontext = createContext(null);
export const Blogprovider =(props) => {
  const [blogimg,setBlogimg] = useState()
  const [blogtitle, setBlogtitle] = useState()
  const [blogauthor,setBlogAuthor] = useState()
  const [blogcontent,setBlogContent] = useState()
  const [blogdate,setBlogdate] = useState()
  return (
    <Blogcontext.Provider value={{blogimg,setBlogimg,blogtitle,setBlogtitle,blogauthor,setBlogAuthor,blogcontent,setBlogContent,blogdate,setBlogdate}}>
      {props.children}
    </Blogcontext.Provider>
  )
}

