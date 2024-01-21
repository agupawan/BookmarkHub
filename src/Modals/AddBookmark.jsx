import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import { IoClose } from "react-icons/io5";
import { addBookmark } from "../services/index/users";
import { useGetCategoriesQuery } from "../services/jsonServerApi";

const AddBookmark = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const { isError, isSuccess, data, error } = useGetCategoriesQuery();

  
  

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ bookmarkName, link, category, bookmarkType }) => {
      
      return addBookmark({ bookmarkName, link, category, bookmarkType, token: userState.userInfo.accessToken });
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Bookmark added successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      bookmarkName: "",
      link: "",
      category: "",
      bookmarkType: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    
    if (!userState.userInfo) {
      navigate("/login");
    }
  }, [navigate, userState.userInfo]);

  const submitHandler = (data) => {
    const { bookmarkName, link, category, bookmarkType } = data;
    mutate({ bookmarkName, link, category, bookmarkType });
  };

  if(!userState.userInfo){
    return <></>
  }
  return (

    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div className="min-h-screen bg-transparent flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
              className="absolute top-6 right-4 z-10 cursor-pointer text-gray-600 hover:text-gray-800 text-3xl"
              onClick={onClose}
            >
              <IoClose />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-24 py-4 bg-white shadow-lg sm:rounded-3xl sm:py-16">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Add Bookmark</h1>
                </div>
                <form autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
                  <div className="divide-y divide-gray-200">
                    <div className="py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input
                          id="bookmarkName"
                          type="text"
                          {...register("bookmarkName", {
                            minLength: {
                              value: 1,
                              message:
                                "Bookmark name length must be at least 1 character",
                            },
                            required: {
                              value: true,
                              message: "Bookmark name is required",
                            },
                          })}
                          placeholder="Enter Bookmark name"
                          className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 ${
                            errors.bookmarkName
                              ? "border-red-500"
                              : "border-[#c3cad9]"
                          }`}
                        />
                        {errors.bookmarkName?.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.bookmarkName?.message}
                          </p>
                        )}
                        <label
                          htmlFor="bookmarkName"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm "
                        >
                          Bookmark Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          id="link"
                          type="text"
                          {...register("link", {
                            minLength: {
                              value: 10,
                              message:
                                "Bookmark link length must be at least 10 character",
                            },
                            required: {
                              value: true,
                              message: "Bookmark link is required",
                            },
                          })}
                          placeholder="Enter Bookmark link"
                          className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 ${
                            errors.link ? "border-red-500" : "border-[#c3cad9]"
                          }`}
                        />
                        {errors.link?.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.link?.message}
                          </p>
                        )}
                        <label
                          htmlFor="link"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm "
                        >
                          Link
                        </label>
                      </div>
                      <div className="relative mx-auto">
                        <select
                          id="category"
                          name="category"
                          
                          
                          {...register("category", {
                            required: {
                              value: true,
                              message: "Bookmark category is required",
                            },
                          })}
                          className={`peer placeholder-transparent h-10 text-sm w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 ${
                            errors.bookmarkType
                              ? "border-red-500"
                              : "border-[#c3cad9]"
                          }`}
                        >
                          
                          {data?.map((item, index) => (
                            <option key={index} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                          
                        </select>
                        {errors.category?.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.category?.message}
                          </p>
                        )}
                        <label
                          htmlFor="category"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm "
                        >
                          Category
                        </label>
                      </div>
                      <div className="relative">
                        <select
                          id="bookmarkType"
                          name="bookmarkType"
                          {...register("bookmarkType", {
                            required: {
                              value: true,
                              message: "Bookmark type is required",
                            },
                          })}
                          className={`peer placeholder-transparent text-sm h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 ${
                            errors.bookmarkType
                              ? "border-red-500"
                              : "border-[#c3cad9]"
                          }`}
                        >
                          <option value="Public">Public</option>
                          <option value="Private">Private</option>
                        </select>
                        {errors.bookmarkType?.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.bookmarkType?.message}
                          </p>
                        )}
                        <label
                          htmlFor="bookmarkType"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm "
                        >
                          Bookmark Type
                        </label>
                      </div>
                      <div className="relative">
                        <button
                          type="submit"
                          disabled={!isValid || isLoading}
                          onClick={onClose}
                          className="flex bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-lg uppercase font-bold shadow-md rounded-full px-5 py-2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBookmark;
