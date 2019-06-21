import { ADD_STUDENT } from "../constants/action_types";

export function addStudent(payload) {
  return {
    type: ADD_STUDENT,
    payload
  };
}
