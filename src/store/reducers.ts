import {
  RequestRobotsState,
  RobofriendsAction,
  SearchRobotsState,
} from "../model/state";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILURE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";

export const initialSateSearch: SearchRobotsState = {
  searchField: "",
};

export const searchRobots = (
  state: SearchRobotsState = initialSateSearch,
  action: RobofriendsAction = { type: "" }
): SearchRobotsState => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

export const initialSateRobots: RequestRobotsState = {
  isPending: false,
  robots: [],
  error: undefined,
};

export const requestRobots = (
  state: RequestRobotsState = initialSateRobots,
  action: RobofriendsAction = { type: "" }
): RequestRobotsState => {
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
