import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import MainLayout from "../../components/MainLayout";
import { getUserProfile, updateProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";
import { userActions } from "../../store/reducers/userReducers";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: async () => {
      return await getUserProfile({ token: userState.userInfo.accessToken });
    },
    queryKey: ["profile"],
  });

  

  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    
    mutationFn: ({ name, phone, bio }) => {
      return updateProfile({
        token: userState.userInfo.accessToken,
        userData: { name, phone, bio }
      });
    },
    onSuccess: (data) => {
      console.log(data);
      const temp = data.data;
      const token = {accessToken : userState.userInfo.accessToken};
      dispatch(userActions.setUserInfo({...temp,...token}));
      localStorage.setItem("account", JSON.stringify({...temp,...token}));
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile is updated");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      bio: ""
    },
    values: {
      name: profileIsLoading ? "" : profileData?.data.name,
      email: profileIsLoading ? "" : profileData?.data.email,
      phone: profileIsLoading ? "" : profileData?.data.phone,
      bio: profileIsLoading ? "" : profileData?.data.bio
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { name, phone,bio } = data;
    mutate({ name, phone,bio });
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <ProfilePicture avatar={profileData?.avatar} /><br />
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                placeholder="Name"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.name ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.name?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                disabled
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                placeholder="Email"
                className={`placeholder:text-[#959ead] text-dark-hard bg-slate-300 mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.email ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="phone"
                className="text-[#5a7184] font-semibold block"
              >
                Contact
              </label>
              <input
                type="text"
                id="phone"
                {...register("phone")}
                placeholder="Mobile number"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.phone ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.phone?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="bio"
                className="text-[#5a7184] font-semibold block"
              >
                Bio
              </label>
              <input
                type="text"
                id="bio"
                {...register("bio")}
                placeholder="Bio"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.bio ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.bio?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.bio?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={!isValid || profileIsLoading || updateProfileIsLoading}
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
             >
              Update
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;