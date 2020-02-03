import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  const list = styles.friendList;
  const item = styles.item;
  const offline = styles.statusOffline;
  const online = styles.statusOnline;
  const image = styles.avatar;
  const friendName = styles.name;

  return (
    <ul className={list}>
      {friends.map(({ isOnline, avatar, name, id }) => {
        return (
          <li className={item} key={id}>
            <span className={isOnline ? online : offline}></span>
            <img className={image} src={avatar} alt={name} width="48" />
            <p className={friendName}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number
};

export default FriendList;
