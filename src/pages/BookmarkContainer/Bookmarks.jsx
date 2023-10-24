import React from "react";
// import { Link } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";
import SuggestedBookmarks from "./SuggestedBookmarks";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/bookmark/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.Post,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
 
];


const Bookmarks = () => {
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
          {/* <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link> */}
    
          {/* <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
            </p>
          </div> */}
           <SuggestedBookmarks
          header="Your Bookmarks"
          posts={postsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
        </article>
        <SuggestedBookmarks
          header="Latest Bookmarks"
          posts={postsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  )
}

export default Bookmarks