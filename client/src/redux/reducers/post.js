import * as types from '../actions/types';

const initialState = {
  posts: [],
  currentPost: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.FETCH_POSTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case types.FETCH_SINGLE_POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case types.FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        currentPost: action.payload,
        loading: false,
      };
    case types.FETCH_SINGLE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case types.CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
      };
    case types.CREATE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case types.DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
        currentPost: null,
        loading: false,
      };
    case types.DELETE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          post._id === action.payload._id ? action.payload : post;
        }),
        currentPost: action.payload,
        loading: false,
      };
    case types.UPDATE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export { postReducer };
