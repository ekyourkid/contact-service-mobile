import {combineReducers} from 'redux';
import DataReducers from './getContact';
import DetailContact from './getDetailContact';
import EditContactReducers from './putContact';
import CreateContact from './createContact';
import DeleteContactReducers from './deleteContact';
const rootReducer = combineReducers({
  DataReducers,
  DetailContact,
  EditContactReducers,
  CreateContact,
  DeleteContactReducers,
});

export default rootReducer;
