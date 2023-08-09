import Auth from "../../layouts/Auth";
import { withSessionSsr } from "@/lib/withSession";
import BasicInfo from "@/components/dashboard/BasicInfo";
import DashboardMain from "@/components/dashboard/DashboardMain";

interface User {
  username: string;
  isAdmin: boolean;
  email: string;
}

interface Props {
  user: User;
}

const Dashboard: React.FC<Props> = ({ user }) => {
  const uWallet = {
    walletAccountBalance: "100,000",
    account_number: "50700000",
  };
  return (
    <Auth pageTitle="Home">
      <div className="mt-5 px-lg-5">
        <BasicInfo
          user={user}
          walletBalance={uWallet?.walletAccountBalance ?? "00"}
        />
        <DashboardMain wallet={uWallet} />
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

export default Dashboard;
