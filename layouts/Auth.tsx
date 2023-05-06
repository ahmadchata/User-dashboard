import Head from "next/head";
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/layout/TopBar";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

const Auth = ({ children, pageTitle }: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Lendsqr Dashboard | {pageTitle}</title>
      </Head>
      <main className={`d-flex`}>
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content">
          <div className="sticky-top">
            <TopBar />
          </div>

          {children}
        </div>
      </main>
    </>
  );
};

export default Auth;
