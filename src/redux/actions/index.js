import axios from "axios";

export const post_login = (data, history) => {
  return (dispatch) => {
    axios
      .post("https://home-crud.herokuapp.com/user/login", data)
      .then((res) => {
        console.log(res);
      });
  };
};

export const post_register = (data, history) => {
  return (dispatch) => {
    axios
      .post("https://home-crud.herokuapp.com/user/register", data)
      .then((res) => {
        console.log(res);
      });
  };
};

// export const tambah_artikel = (data, history);
