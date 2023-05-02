import Head from "next/head";
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/layout/TopBar";

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

const Auth = ({ children, pageTitle = "" }: Props) => {
  return (
    <>
      <Head>
        <title>Lendsqr Dashboard | {pageTitle}</title>
      </Head>
      <section className={`d-flex`}>
        <NavBar />

        <main className={`col-10`}>
          <div className="sticky-top mt-3 ps-5 pe-4">
            <TopBar />
          </div>

          {children}
        </main>
      </section>
    </>
  );
};

export default Auth;
