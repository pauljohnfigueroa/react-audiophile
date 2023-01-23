/*
Replaced with Redux
*/


// import { createContext, useEffect, useReducer } from "react";

// // import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// // import { createAction } from "../utils/reducer/create-action.reducer";

// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: () => null
// });

// // Moved to store/user/user-reducer.js

// // const USER_ACTION_TYPES = {
// //     SET_CURRENT_USER: 'SET_CURRENT_USER',
// // }

// // const UserReducer = (state, action) => {
// //     const { type, payload } = action;

// //     switch (type) {
// //         case USER_ACTION_TYPES.SET_CURRENT_USER:
// //             return {
// //                 ...state,
// //                 currentUser: payload
// //             }
// //         default:
// //             throw new Error(`Unhandle type ${type} in UserReducer`);
// //     }
// // }

// // const INITIAL_STATE = {
// //     currentUser: null,
// // }

// export const UserProvider = ({ children }) => {

//     // replaced by userReducer
//     // const [currentUser, setCurrentUser] = useState(null);

//     // const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
//     // const { currentUser } = state;

//     // const setCurrentUser = (user) => {
//     //     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//     // }

//     // const value = { currentUser, setCurrentUser };

//     // moved to index.js
//     // useEffect(() => {
//     //     const unsubscribe = onAuthStateChangedListener(user => {
//     //         if (user) {
//     //             createUserDocumentFromAuth(user);
//     //         }
//     //         setCurrentUser(user);
//     //         console.log('user.contenxt UserProvider', user);
//     //     });

//     //     return unsubscribe;
//     // }, []);

//     // return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }