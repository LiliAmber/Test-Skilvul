import {
  SHOW_IRON_MAN,
  SHOW_SEARCH,
  SHOW_ERROR,
  SHOW_LOADING,
} from "./actionType";

import axios from "axios";

export function setIronMan(payload) {
  return {
    type: SHOW_IRON_MAN,
    payload,
  };
}

export function setSearch(payload) {
  return {
    type: SHOW_SEARCH,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SHOW_ERROR,
    payload,
  };
}

export function fetchIronMan() {
  return async (dispatch) => {
    try {
      console.log("<<<<MASOOKK");
      let { data } = await axios({
        method: "GET",
        url: "https://api.giphy.com/v1/gifs/search?api_key=hvCgw7Nh8qf7sEPA7lModLlNIMYYo8eN&q=ironman&limit=9",
      });
      console.log(data.data, "<<<<fetch");

      let filtered = data.data.map((item) => {
        return item.images.original.url;
      });
      //   console.log(filtered);
      //   dispatch(setIronMan.push(filtered));
      dispatch(setIronMan(data.data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
