import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//test ajax
// import { login, signup, logout } from './util/session_api_util'
// window.login = login;
// window.signup = signup;
// window.logout = logout;
// import { fetchPhotos } from './util/photo_api_util'
// window.fetchPhotos = fetchPhotos
//test store
//

// import { fetchUser } from './util/user_api_util';

// window.fetchUser = fetchUser;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store} />, root)
});