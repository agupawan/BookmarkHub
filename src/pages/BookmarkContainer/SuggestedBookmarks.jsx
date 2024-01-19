import React, { useEffect } from 'react'
import { images } from '../../constants';

import { useGetCategoriesQuery } from "../../services/jsonServerApi";


import { Link } from "react-router-dom";

const SuggestedBookmarks = ({ className, header, posts = [], category}) => {

  const { isLoading, isError, isSuccess, data, error} = useGetCategoriesQuery();

  const imgUrl = data?.categories
  .filter((item) => item.name === category)


 
  

  return (
    <div
    className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
  >
    <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
      {header}
    </h2>
    <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
      {posts?.map((item,index) => (
        <Link
        key={index}
        to={item.link}
        target="_blank"
        >
        <div
          className="flex space-x-3 flex-nowrap items-center"
        >
           {Array.isArray(imgUrl) && imgUrl.length > 0 && (
                <img
                  className="aspect-square object-cover rounded-lg w-1/5"
                  src={imgUrl[0]?.imageUrl}
                  target="_main"
                  alt="laptop"
                />
              )}
          <div className="text-sm font-roboto text-dark-hard font-medium">
            <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
              {item.bookMarkName}
            </h3>
            <span className="text-xs opacity-60">
              {new Date(item.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        </Link>
      ))}
    </div>
    
  </div>
  )
}

export default SuggestedBookmarks