import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILURE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";

const initialSateSearch = {
  searchField: "",
};

export const searchRobots = (state = initialSateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

export const initialSateRobots = {
  isPending: false,
  robots: [],
  error: ''
};

export const requestRobots = (state = initialSateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILURE:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
