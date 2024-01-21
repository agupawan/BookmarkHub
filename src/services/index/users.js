import axios from "axios";


export const signup = async ({ name, email, password, confirmPassword, phone }) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/v1/user/register", {
      name,
      email,
      password,
      confirmPassword,
      phone
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }) => {
  try {

    const { data } = await axios.post("http://localhost:5000/api/v1/user/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getUserProfile = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`http://localhost:5000/api/v1/user/info`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfile = async ({ token, userData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.patch(
      `http://localhost:5000/api/v1/user/updateprofile`,
      userData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfilePicture = async ({ token, formData }) => {
  console.log(formData);
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.patch(
      `http://localhost:5000/api/v1/user/updateprofilepicture`,
      formData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const forgotPassword = async ({ email }) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/v1/user/log", {
      email
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const addBookmark = async ({ bookmarkName,link,category,bookmarkType, token }) => {
  try {

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // };

    const data = await axios.post('http://localhost:5000/api/v1/category/bookmark/new', {
      bookmarkName,
      link,
      category,
      bookmarkType
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });


    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};