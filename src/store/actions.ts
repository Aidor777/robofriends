import { RobofriendsAction } from "../model/state";
import { Robot } from "../model/types";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILURE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";

export const setSearchField = (text: string): RobofriendsAction => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch: (action: RobofriendsAction) => void): void => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response: Response) => response.json())
    .then((data: Array<Robot>) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error: any) =>
      dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: error })
    );
};
