import Auth from "../../layouts/Auth";
import { withSessionSsr } from "@/lib/withSession";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      username: string;
      isAdmin?: boolean;
    };
  }
}

const Dashboard: React.FC = () => {
  return (
    <Auth pageTitle="Overview">
      <div className="mt-2 ps-5">Dashboard</div>
    </Auth>
  );
};

export const getServerSideProps = withSessionSsr(async function ({ req, res }) {
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
