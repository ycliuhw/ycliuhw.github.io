import React, { useState, useReducer } from 'react';

import UserContext from './user-context';
import {
  appReducer,
  SET_TOKEN, LOAD_PROFILE, LOAD_MEDIA, START_LOADING,
} from './reducers';

import instagramAPI, {
  fetchProfile,
  fetchMedia
} from '../remote/instagramAPI';

const GlobalState = (props) => {
  const [appState, dispatch] = useReducer(appReducer, {
    token: "",
    profile: {},
    media: {},
  });

  const setToken = token => dispatch({ type: SET_TOKEN, token });
  const loadProfile = token => {
    return fetchProfile(token).then(({ data }) => dispatch({ type: LOAD_PROFILE, profile: data }));
  };
  const loadMedia = token => {
    return fetchMedia(token).then(media => dispatch({ type: LOAD_MEDIA, media }));
  };
  const startLoading = () => dispatch({ type: START_LOADING })

  return (
    <UserContext.Provider
      value={{
        setToken,
        loadProfile,
        loadMedia,
        startLoading,
        token: appState.token,
        profile: appState.profile,
        media: appState.media,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default GlobalState;
