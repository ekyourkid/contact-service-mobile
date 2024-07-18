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

export const GetDetailContact = id => async (dispatch, getState) => {
  try {
    dispatch({type: 'GET_DETAIL_PENDING'});

    const res = await axios.get(`${BASE_URL}/contact/${id}`);
    dispatch({type: 'GET_DETAIL_SUCCESS', payload: res?.data?.data});
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({type: 'GET_DETAIL_ERROR'});
  }
};

export const EditContact =
  (id, data, navigation) => async (dispatch, getState) => {
    try {
      dispatch({type: 'UPDATE_DATA_PENDING'});

      console.log(id, data, 'action edit');
      const res = await axios.put(`${BASE_URL}/contact/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res, 'xxxxxxxxxxxx');
      dispatch({type: 'UPDATE_DATA_SUCCESS', payload: res.data});
      navigation.goBack();
    } catch (err) {
      console.log(err?.message ? err.message : err);
      dispatch({
        type: 'UPDATE_DATA_ERROR',
        payload: err?.response?.data?.message ?? 'update contact error',
      });
    }
  };

export const PostContact = (data, navigation) => async (dispatch, getState) => {
  try {
    dispatch({type: 'CREATE_DATA_PENDING'});
    const res = await axios.post(`${BASE_URL}/contact`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({type: 'CREATE_DATA_SUCCESS', payload: res.data});
    navigation.goBack();
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({
      type: 'CREATE_DATA_ERROR',
      payload: err?.response?.data?.message ?? 'post contact error',
    });
  }
};

export const DeleteContact = (id, navigation) => async (dispatch, getState) => {
  try {
    dispatch({type: 'DELETE_DATA_PENDING'});

    const res = await axios.delete(`${BASE_URL}/contact/${id}`, {
      headers: {
        'content-type': 'application/json',
      },
    });

    dispatch({type: 'DELETE_DATA_SUCCESS', payload: res?.data?.data});
    navigation.goBack();
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({
      type: 'DELETE_DATA_ERROR',
      payload: err?.response?.data?.message ?? 'delete contact error',
    });
  }
};
