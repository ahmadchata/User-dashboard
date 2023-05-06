import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import Auth from "../../../layouts/Auth";
import Details from "../../../components/users/userDetails";
import axios from "axios";
import { withSessionSsr } from "@/lib/withSession";

interface Profile {
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
  bvn: string;
  gender: string;
}

interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: Array<string>;
  loanRepayment: string;
}

interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  gender: string;
}

interface User {
  userName: string;
  accountBalance: string;
  profile: Profile;
  education: Education;
  socials: Socials;
  guarantor: Guarantor;
  accountNumber: string;
  email: string;
}

const UserDetails: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>({
    profile: {
      firstName: "",
      lastName: "",
      avatar: "",
      phoneNumber: "",
      bvn: "",
      gender: "",
    },
    education: {
      level: "",
      employmentStatus: "",
      sector: "",
      duration: "",
      officeEmail: "",
      monthlyIncome: [],
      loanRepayment: "",
    },
    socials: { facebook: "", instagram: "", twitter: "" },
    guarantor: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
    },
    accountBalance: "",
    userName: "",
    accountNumber: "",
    email: "",
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

export default UserDetails;
