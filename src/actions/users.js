export const GET_USERS = "GET_USERS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function addAnswer({ authedUser, questionId, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    questionId,
    answer
  };
}
