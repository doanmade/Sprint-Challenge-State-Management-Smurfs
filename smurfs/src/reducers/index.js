import {
  FETCH_SMURFS_FAIL,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  POST_SMURFS_FAIL,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS
} from "../actions";

const initialState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ],
  error: "",
  callingAPI: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        callingAPI: true,
        error: ""
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        callingAPI: false,
        error: ""
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        callingAPI: false,
        error: `${action.payload.status} ${action.payload.statusText}`
      };
    case POST_SMURFS_START:
      return {
        ...state,
        callingAPI: true,
        error: ""
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        callingAPI: false,
        error: ""
      };
    case POST_SMURFS_FAIL:
      return {
        ...state,
        callingAPI: false,
        error: `${action.payload.status} ${action.payload.statusText}`
      };
    //   case REMOVE_SMURFS_START:
    //       return {
    //           ...state,
    //           callingAPI: true,
    //           error: ""
    //       };
    //   case REMOVE_SMURFS_SUCCESS:
    //       return {
    //           ...state,
    //           smurfs: state.smurfs.fliter(action.payload,
    //               smurfs => smurfs.id !== action.payload.id)

    //   };
    //   case REMOVE_SMURFS_FAIL:
    //       return {
    //           ...state,
    //           callingAPI: false,
    //           error: `${action.payload.status} ${action.payload.statusText}`
    //       };
    default:
      return state;
  }
};
