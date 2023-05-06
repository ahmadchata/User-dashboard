import Auth from "../../../layouts/Auth";
import ViewUsers from "../../../components/users/viewUsers";
import styles from "/styles/Users.module.scss";
import { withSessionSsr } from "@/lib/withSession";

const Users = (): JSX.Element => {
  return (
    <Auth pageTitle="Users">
      <div className={styles.bg}>
        <ViewUsers />
      </div>
    </Auth>
  );
};

export const getServerSideProps = withSessionSsr(async function ({ req }) {
  const user = req.session.user;

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { user: req.session.user },
  };
});

export default Users;
