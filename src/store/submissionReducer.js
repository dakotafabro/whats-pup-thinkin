const ADD_SUBMISSION = "ADD_SUBMISSION";
const GET_SUBMISSIONS = "GET_SUBMISSIONS";
const UPDATE_SUBMISSION = "UPDATE_SUBMISSION";
const DELETE_SUBMISSION = "DELETE_SUBMISSION";

const _addSubmission = (submission) => {
  return {
    type: ADD_SUBMISSION,
    submission,
  };
};

const _getSubmissions = (id) => {
  return {
    type: GET_SUBMISSIONS,
    id,
  };
};

const _updateSubmission = (submission) => {
  return {
    type: UPDATE_SUBMISSION,
    submission,
  };
};

const _deleteSubmission = (id) => {
  return {
    type: DELETE_SUBMISSION,
    id,
  };
};

export const addSubmission = (submission) => {
  return async (dispatch) => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
};

export const getSubmissions = () => {
  return async (dispatch) => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
};

export const updateSubmission = (id, submission) => {
  return async (dispatch) => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteSubmission = (id, submission) => {
  return async (dispatch) => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
};

const submissionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SUBMISSION:
      return;
    case GET_SUBMISSIONS:
      return;
    case UPDATE_SUBMISSION:
      return;
    case DELETE_SUBMISSION:
      return;
    default:
      return state;
  }
};

export default submissionReducer;
