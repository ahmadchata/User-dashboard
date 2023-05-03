import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import Auth from "../../../layouts/Auth";
import Details from "../../../components/users/userDetails";
import axios from "axios";

interface Profile {
  firstName: string;
  lastName: string;
  avatar: string;
}

interface User {
  userName: string;
  accountBalance: string;
  profile: Profile;
  accountNumber: string;
}

const UserDetails: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>({
    profile: { firstName: "", lastName: "", avatar: "" },
    accountBalance: "",
    userName: "",
    accountNumber: "",
  });
  const router = useRouter();
  const { id } = router.query;

  // Get User
  const getUser = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get<User>(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Auth pageTitle={user.userName}>
      {loading ? <p>Loading...</p> : <Details user={user} />}
    </Auth>
  );
};

export default UserDetails;
