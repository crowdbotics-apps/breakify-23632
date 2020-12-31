import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2189582Reducer from '../features/SignIn2189582/redux/reducers'
import SignIn21189560Reducer from '../features/SignIn21189560/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2189582: SignIn2189582Reducer,
SignIn21189560: SignIn21189560Reducer,

});