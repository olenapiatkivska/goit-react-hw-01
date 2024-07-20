import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profileWrapp}>
            <div className={css.profileWrappImg}>
                <img className={css.profileImg}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.profileName}>{name}</p>
                <p className={css.profileTag}>@{tag}</p>
                <p className={css.profileLocation}>{location}</p>
            </div>

            <ul className={css.profileList}>
                <li className={css.profileItem}>
                    <span className={css.profileText}>Followers</span>
                    <span className={css.profileStats}>{stats.followers}</span>
                </li>
                <li className={css.profileItem}>
                    <span className={css.profileText}>Views</span>
                    <span className={css.profileStats}>{stats.views}</span>
                </li>
                <li className={css.profileItem}>
                    <span className={css.profileText}>Likes</span>
                    <span className={css.profileStats}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
export default Profile;