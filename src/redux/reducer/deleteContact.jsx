const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

const DeleteContactReducers = (state = initialState, action) => {
  if (action.type === 'DELETE_DATA_PENDING') {
    return {
      ...state,
      data: null,
      isError: false,
      isSuccess: false,
      isLoading: true,
    };
  } else if (action.type === 'DELETE_DATA_SUCCESS') {
    return {
      ...state,
      data: action.payload,
      isError: false,
      isSuccess: true,
      isLoading: false,
    };
  } else if (action.type === 'DELETE_DATA_ERROR') {
    return {
      ...state,
      data: null,
      isError: true,
      isSuccess: false,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default DeleteContactReducers;
