import Auth from "../../layouts/Auth";
import { withSessionSsr } from "@/lib/withSession";
import BasicInfo from "@/components/dashboard/BasicInfo";

const Dashboard: React.FC = () => {
  const user = {
    username: "Ahmad",
    email: "ahmadchata@gmail.com",
  };

  const uWallet = {
    walletAccountBalance: "00",
  };
  return (
    <Auth pageTitle="Home">
      <div className="mt-2 ps-5">
        <BasicInfo
          user={user}
          walletBalance={uWallet?.walletAccountBalance ?? "00"}
        />
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
