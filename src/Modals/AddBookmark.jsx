import React from "react";

import { IoClose } from "react-icons/io5";

const AddBookmark = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div className="min-h-screen bg-transparent flex flex-col justify-center sm:py-12">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
              className="absolute top-6 right-4 z-10 cursor-pointer text-gray-600 hover:text-gray-800 text-3xl"
              onClick={onClose}
            >
              <IoClose />
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div class="relative px-24 py-4 bg-white shadow-lg sm:rounded-3xl sm:py-16">
              <div class="max-w-md mx-auto">
                <div>
                  <h1 class="text-2xl font-semibold">
                    Add Bookmark
                  </h1>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div class="relative">
                      <input
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="text"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      />
                      <label
                        for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm "
                      >
                        Bookmark Name
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        id="password"
                        name="password"
                        type="password"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      />
                      <label
                        for="password"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm"
                      >
                        Link
                      </label>
                    </div>
                    <div class="relative">
                    <input
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="text"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      />
                      <label
                        for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm "
                      >
                        Category
                      </label>
                    </div>
                    <div class="relative">
                    <input
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="text"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      />
                      <label
                        for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm "
                      >
                        Bookmark Type
                      </label>
                    </div>
                    <div class="relative">
                      <button class="flex bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-lg uppercase font-bold shadow-md rounded-full px-5 py-2">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBookmark;
