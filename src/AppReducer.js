export default (state, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return {
        ...state,
        token: action.payload
      };
    case "ADD_COMMENT":
      return {
        ...state, comments : 
        [...state.comments,  action.payload]
        };
    default:
      return state;
}
};