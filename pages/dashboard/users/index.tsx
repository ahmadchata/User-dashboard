import Auth from "../../../layouts/Auth";
import ViewUsers from "../../../components/users/viewUsers";
import styles from "/styles/Users.module.scss";

const Users = (): JSX.Element => {
  return (
    <Auth pageTitle="Users">
      <div className={styles.bg}>
        <ViewUsers />
      </div>
    </Auth>
  );
};

export default Users;
