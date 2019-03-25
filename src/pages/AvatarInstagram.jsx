import React, { useContext, useEffect } from 'react';
import {
  Avatar, Badge,
} from 'antd';
import { Link, Route, Redirect } from 'react-router-dom';
import { isEmpty } from '../utils/strings';

import { InstagramLogin } from '../components';
import UserContext from '../context/user-context';

const AvatarInstagram = (props) => {
  const context = useContext(UserContext);
  console.error("AvatarInstagram context.profile", context.profile);
  const { profile_picture, counts, full_name } = context.profile;
  if (isEmpty(profile_picture)) {
    return (
      <Avatar size="default" shape="circle" icon="user" />
    );
  }
  return (
    <Avatar size="default" shape="circle" src={profile_picture} />
  );
};
export default AvatarInstagram;