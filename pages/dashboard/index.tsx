import Head from "next/head";
import Auth from "../../layouts/Auth";

const Dashboard: React.FC = () => {
  return (
    <Auth>
      <Head>
        <title>Dashboard | Lendsqr</title>
      </Head>
      <div className="mt-2 ps-5">Dashboard</div>
    </Auth>
  );
};

export default Dashboard;
