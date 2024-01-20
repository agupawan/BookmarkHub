import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../services/jsonServerApi';

const SuggestedBookmarks = ({ className, header, posts = [], category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { isLoading, isError, isSuccess, data, error } = useGetCategoriesQuery();
  const imgUrl = data?.filter((item) => item.name === category);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`mx-2 px-3 py-1 border rounded ${
            i === currentPage ? 'bg-blue-500 text-white' : 'border-gray-300'
          }`}
          onClick={() => paginate(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}>
      <h2 className="font-roboto font-medium text-dark-hard md:text-xl">{header}</h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {currentItems.map((item, index) => (
          <Link key={index} to={item.link} target="_blank">
            <div className="flex space-x-3 flex-nowrap items-center">
            {Array.isArray(imgUrl) && imgUrl.length > 0 && (
                <img
                  className="aspect-square object-cover rounded-lg w-1/5"
                  src={imgUrl[0]?.photo}
                  target="_main"
                  alt="laptop"
                />
              )}
              <div className="text-sm font-roboto text-dark-hard font-medium">
                <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                  {item.bookMarkName}
                </h3>
                <span className="text-xs opacity-60">
                  {new Date(item.createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">{renderPaginationButtons()}</div>
    </div>
  );
};

export default SuggestedBookmarks;
