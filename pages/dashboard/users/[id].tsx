import { useRouter } from "next/router";
import Auth from "../../../layouts/Auth";

const UserDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Auth>
      <p>User Details: {id}</p>
    </Auth>
  );
};

export default UserDetails;
