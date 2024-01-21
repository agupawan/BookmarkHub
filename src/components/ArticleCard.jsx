import React from "react";

import { images } from "../constants";
import { Link } from 'react-router-dom';

const ArticleCard = ({ className, category }) => {
  return (
    
    <div
      className={`rounded-xl overflow-hidden bg-slate-800 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <Link to={`bookmark?category=${category.name}`}>
      <img
        src={category.photo}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5 bg-slate-800">
        <h2 className="font-roboto  font-bold text-xl text-white md:text-xl lg:text-2xl">
         {category.name}
        </h2>
        <p className="text-slate-300 mt-3 text-sm">
         {category.description}
        </p>
        </div>
      </Link>

    </div>
  );
};

export default ArticleCard;