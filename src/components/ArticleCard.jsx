import React from "react";

import { images } from "../constants";
import { Link } from 'react-router-dom';

const ArticleCard = ({ className, category }) => {
  return (
    
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <Link to={`bookmark/${category.id}`}>
      <img
        src={images.Post}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
         {category.title}
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
         {category.desc}
        </p>
        </div>
      </Link>

    </div>
  );
};

export default ArticleCard;