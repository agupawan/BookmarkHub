import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";
import SuggestedBookmarks from "./SuggestedBookmarks";
import { useParams } from 'react-router';
import { useGetBookmarksQuery } from "../../services/jsonServerApi";





// const postsData = [
//   {
//     _id: "1",
//     image: images.Post,
//     title: "Help children get better education",
//     createdAt: "2023-01-28T15:35:53.607+0000",
//   },
//   {
//     _id: "2",
//     image: images.Post,
//     title: "Help children get better education",
//     createdAt: "2023-01-28T15:35:53.607+0000",
//   },
//   {
//     _id: "3",
//     image: images.Post,
//     title: "Help children get better education",
//     createdAt: "2023-01-28T15:35:53.607+0000",
//   },
//   {
//     _id: "4",
//     image: images.Post,
//     title: "Help children get better education",
//     createdAt: "2023-01-28T15:35:53.607+0000",
//   },
 
// ];


const Bookmarks = () => {

  
    const params = useParams();
  

    const breadCrumbsData = [
      { name: "Home", link: "/" },
      { name: "Blog", link: `bookmark/${params.id}` },
    ];

    const { isLoading, isError, isSuccess, data, error} = useGetBookmarksQuery(params.id);
    const postsData = data?.bookmarks;
    
    

  
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <h1 className="text-xl font-medium font-roboto mt-4 p-3 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <img
            className="rounded-xl w-full"
            src={images.Post}
            alt="laptop"
          />
          {isSuccess && < SuggestedBookmarks
          header="Your Bookmarks"
          posts={postsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />}
        </article>
        {isSuccess &&
        <SuggestedBookmarks
          header="Latest Bookmarks"
          posts={postsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />}
      </section>
    </MainLayout>
  )
}

export default Bookmarks