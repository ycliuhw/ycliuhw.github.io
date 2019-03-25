import React, { useContext, useEffect, useReducer, useState } from 'react';
import {
  Icon, List, message, Avatar, Spin, Card,
} from 'antd';
import { Link, Route, Redirect } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

import UserContext from '../context/user-context';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const { Meta } = Card;


export default props => {
  const context = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [nextID, setNextID] = useState("");

  const { pagination, data } = context.media

  useEffect(() => {
    context.startLoading();
    context.loadProfile(context.token);
  }, [context.token]);

  useEffect(() => {
    context.startLoading();
    context.loadMedia(context.token);
  }, [nextID]);

  return (
    <InfiniteScroll
      initialLoad={false}
      pageStart={0}
      loadMore={() => {
        if (pagination) {
          setNextID(pagination.next_max_id)
        }
      }}
      hasMore={!!nextID}
      useWindow={false}
    >
      <List
        dataSource={data}
        renderItem={item => {
          const { id, caption, user, images: { standard_resolution }, link, created_time } = item;
          return (
            <List.Item
              key={id}
            >
              <Card
                style={{ width: standard_resolution.width, height: standard_resolution.height }}
                cover={
                  <img
                    alt={id}
                    width={standard_resolution.width}
                    height={standard_resolution.height}
                    src={standard_resolution.url}
                  />
                }
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              >
                <Meta
                  avatar={<Avatar src={user.profile_picture} />}
                  title={id}
                  description={caption ? caption.text : ""}
                />
              </Card>
            </List.Item>
          );
        }}
      >
      </List>
    </InfiniteScroll >
  );
};
