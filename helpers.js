import axios from "axios";

const helpers = {};

helpers.login = async (data) => {
  try {
    const res = await axios
      .post("https://radiant-savannah-73457.herokuapp.com/auth/login", data)
      .then((v) => {
        console.log(v);
        return v;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.logout = () => {
  localStorage.clear();
};

helpers.getUserDetailsFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("user");
    return JSON.parse(data);
    // 👉️ can use localStorage here
  } else {
    // 👉️ can't use localStorage
  }
};

helpers.register = async (data) => {
  try {
    const res = await axios
      .post("https://radiant-savannah-73457.herokuapp.com/users", data)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.getAllUsers = async () => {
  try {
    const res = await axios
      .get("https://radiant-savannah-73457.herokuapp.com/users")
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.updateUser = async (data) => {
  try {
    const res = await axios
      .put(`https://radiant-savannah-73457.herokuapp.com/users/${data.email}/edit`, data)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

helpers.deleteUser = async (email) => {
  try {
    const res = await axios
      .delete(`https://radiant-savannah-73457.herokuapp.com/users/${email}/delete`)
      .then((v) => {
        return v;
      })
      .catch((error) => {
        return error;
      });

    return res;
  } catch (error) {
    return error;
  }
};

export default helpers;
