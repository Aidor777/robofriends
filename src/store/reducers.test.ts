import * as actionTypes from "./constants";
import * as reducers from "./reducers";

describe("searchRobots reducer", () => {
  it("should return initial state", () => {
    expect(reducers.searchRobots()).toEqual(reducers.initialSateSearch);
  });

  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(reducers.initialSateSearch, {
        type: actionTypes.CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("requestRobots reducer", () => {
  it("should return initial state", () => {
    expect(reducers.requestRobots()).toEqual(reducers.initialSateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(reducers.initialSateRobots, {
        type: actionTypes.REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      ...reducers.initialSateRobots,
      isPending: true,
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(reducers.initialSateRobots, {
        type: actionTypes.REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: "Test",
            email: "test@test.com",
          },
        ],
      })
    ).toEqual({
      ...reducers.initialSateRobots,
      robots: [
        {
          id: 1,
          name: "Test",
          email: "test@test.com",
        },
      ],
    });
  });

  it("should handle REQUEST_ROBOTS_FAILURE", () => {
    expect(
      reducers.requestRobots(reducers.initialSateRobots, {
        type: actionTypes.REQUEST_ROBOTS_FAILURE,
        payload: "NOOOOO!!!!!",
      })
    ).toEqual({
      ...reducers.initialSateRobots,
      error: "NOOOOO!!!!!",
    });
  });
});
