import { Action } from "redux";
import { Robot } from "./types";

export interface RobofriendsAction extends Action<string> {
  payload?: any;
}

export interface RobofriendsState {
  searchRobots: SearchRobotsState;
  requestRobots: RequestRobotsState;
}

export interface SearchRobotsState {
  searchField: string;
}

export interface RequestRobotsState {
  isPending: boolean;
  robots: Array<Robot>;
  error?: any;
}
