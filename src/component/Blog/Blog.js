import React from "react";
import './Blog.css'

import SearchBox from "../SearchBox/SearchBox";
import Category from "../Category/Category";
import LawList from "../LawList/LawList";

function Blog() {
  return (
      <div>
        <SearchBox />
        <Category />
        <LawList />
      </div>
  )
}

export default Blog;