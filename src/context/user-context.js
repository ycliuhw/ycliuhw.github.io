import React from 'react';

export default React.createContext({
  token: "",
  profile: {},
  media: {},
  follower: [],
  following: [],
  isLoading: false,
});