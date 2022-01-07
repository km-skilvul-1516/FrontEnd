import axios from "axios";

export const post_login = (data, history) => {
  return (dispatch) => {
    axios
      .post("https://home-crud.herokuapp.com/user/login", data)
      .then((res) => {
        let role = res.data.result.role;
        if (role === "admin") {
          window.location.href = "http://localhost:3000/admin";
        } else if (role === "user") {
          window.location.href = "http://localhost:3000";
        }
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

export const get_quiz = () => {
  return (dispatch) => {
    axios
      .get("https://teslah-final.herokuapp.com/quis/getAllQuiz")
      .then((res) => {
        dispatch({
          type: "PUT_DATA",
          key: "soal",
          data: res.data.result,
        });
      });
  };
};

// export const tambah_artikel = (data, history);
