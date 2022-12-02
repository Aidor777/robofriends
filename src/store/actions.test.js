import * as actionTypes from "./constants";
import * as actions from "./actions";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it("should perform setSearchField", () => {
  expect(actions.setSearchField("Hello")).toEqual({
    type: actionTypes.CHANGE_SEARCH_FIELD,
    payload: "Hello",
  });
});

it("should perform requestRobots", () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const sentActions = store.getActions();

  expect(sentActions[0]).toEqual({
    type: actionTypes.REQUEST_ROBOTS_PENDING,
  });
});
