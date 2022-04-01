import axios from "axios";
import { GET_ALL_LEADS_URL } from "../constants";
import { GET_CURSOS } from "./constants";

export const getAllLeads = () => async (dispatch) => {
  try {
    const allLeads = await axios.get(GET_ALL_LEADS_URL);
    return dispatch({ type: GET_CURSOS, payload: allLeads.data });
  } catch (err) {
    console.error(err);
  }
};
