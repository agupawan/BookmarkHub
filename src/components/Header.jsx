import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";

import { images } from "../constants";
import { logout } from "../store/actions/user";
import { useNavigate } from "react-router-dom";
import AddBookmark from "../Modals/AddBookmark";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userState = useSelector((state) => state.user);
  const [profileDrowpdown, setProfileDrowpdown] = useState(false);
  const [addBookmarkModal, setAddBookmarkModal] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="bg-sky-100 sticky top-0 left-0 right-0 z-50 shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)]">
      <header className="container mx-auto flex justify-between py-3 items-center">
        <div className="flex items-center">
          <img
            onClick={() => navigate("/")}
            src={images.Logo}
            className="object-contain h-12 cursor-pointer"
            alt="logo"
          />
          {/* <h1 className='font-serif font-bold text-blue-500 text-xl'>Bookmark Hub</h1> */}
        </div>
        <div className="flex items-center">
        <div className="px-5">
        <button
            className="flex items-center border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            onClick={() => setAddBookmarkModal(true)}
          >
            <span>Add Bookmark</span>
          </button>
        </div>
        
        
          {userState.userInfo ? (
            <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className="flex gap-x-1 items-center my-auto lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                    onClick={() => setProfileDrowpdown(!profileDrowpdown)}
                  >
                    <span>Account</span>
                    <MdKeyboardArrowDown />
                  </button>
                  <div
                    className={`${
                      profileDrowpdown ? "block" : "hidden"
                    } hidden transition-all duration-500 pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max`}
                  >
                    <ul className="bg-dark-soft bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                      <button
                        onClick={() => navigate("/profile")}
                        type="button"
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-dark-soft"
                      >
                        Profile Page
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="hover:bg-dark-hard hover:text-white px-4 py-2 text-dark-soft"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Sign in
            </button>
          )}
        
        </div>
      </header>
       <AddBookmark isOpen={addBookmarkModal} onClose={() => setAddBookmarkModal(false)} />
      
    </section>
  );
};

export default Header;
