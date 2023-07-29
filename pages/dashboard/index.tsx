import Auth from "../../layouts/Auth";
import { withSessionSsr } from "@/lib/withSession";

const Dashboard: React.FC = () => {
  return (
    <Auth pageTitle="Home">
      <div className="mt-2 ps-5"></div>
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
