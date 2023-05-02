import Auth from "../../../layouts/Auth";
import ViewUsers from "../../../components/users/viewUsers";

const Users = (): JSX.Element => {
  return (
    <Auth pageTitle="Users">
      <ViewUsers />
    </Auth>
  );
};

export default Users;
