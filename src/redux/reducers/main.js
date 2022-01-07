const initialState = {
  login: false,
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case "PUT_DATA":
      return { ...state, [action.key]: action.data };
    default:
      return state;
  }
};

export default main;
