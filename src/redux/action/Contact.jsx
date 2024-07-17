import axios from 'axios';

const BASE_URL = 'https://contact.herokuapp.com';

export const GetDataContact = () => async (dispatch, getState) => {
  try {
    dispatch({type: 'GET_DATA_PENDING'});

    const res = await axios.get(`${BASE_URL}/contact`);
    dispatch({type: 'GET_DATA_SUCCESS', payload: res?.data?.data});
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({type: 'GET_DATA_ERROR'});
  }
};
