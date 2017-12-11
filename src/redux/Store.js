import {createStore} from 'redux';
import reducer from './reducers/Reducer';


const store = createStore(reducer);

export default store;