import clsx from "clsx";
import css from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.friendListItem}>
            <img className={css.friendImg} src={avatar} alt={name} width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(css.status, isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};

export default FriendListItem;