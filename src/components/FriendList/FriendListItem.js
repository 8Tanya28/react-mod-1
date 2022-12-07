import React from "react";
import s from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map((friend) => (
        <li key={friend.id} className={s.item}>
          <span
            className={friend.isOnline ? s.statusOnline : s.statusOffline}
          ></span>

          <img
            className={s.avatar}
            src={friend.avatar}
            alt="friendAvatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
