import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "/styles/Users.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Buttons from "../Common/NavButton";

interface Profile {
  firstName: string;
  lastName: string;
  avatar: string;
}

interface User {
  accountBalance: string;
  profile: Profile;
  accountNumber: string;
}

interface DetailsProps {
  user: User;
}

const Details: React.FC<DetailsProps> = ({ user }) => {
  const [navButtons, setNavButtons] = useState<number>(0);

  const showPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNavButtons(+e.currentTarget.id);
  };
  const router = useRouter();

  console.log(user);

  return (
    <>
      <section className={`p-3 p-xl-5`}>
        <div className="d-flex justify-content-between">
          <div>
            <button className="btn text-muted" onClick={router.back}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                color="#000"
                className="me-2"
              />
              Back to Users
            </button>
            <h1 className={styles.h1}>User Details</h1>
          </div>
          <div>
            <button
              className={`me-3 bg-white px-3 py-2 fw-bold ${styles.blacklistBtn}`}
            >
              Blacklist user
            </button>
            <button
              className={`me-3 bg-white px-3 py-2 fw-bold ${styles.activateBtn}`}
            >
              Activate user
            </button>
          </div>
        </div>
        <section className="shadow-sm mt-4 px-4 pt-4">
          <div className="d-flex align-items-center ">
            <div className="me-3">
              <Image
                className="rounded-circle"
                src={user.profile.avatar}
                width={100}
                height={100}
                alt="avatar"
              />
            </div>
            <div className="pe-4">
              <h6 className={`${styles.detailsHeading}`}>
                {user.profile.firstName} {user.profile.lastName}
              </h6>
              <p className={`m-0 ${styles.heading}`}>LSQFf587g90</p>
            </div>
            <div className="border-start border-end px-4 py-3">
              <h6 className={`m-0 ${styles.heading}`}>User&apos;s Tier</h6>
              <p className="m-0">
                {[1, 2, 3].map((star) => (
                  <FontAwesomeIcon
                    key={star}
                    icon={faStar}
                    color="#E9B200"
                    className="mt-3"
                  />
                ))}
              </p>
            </div>
            <div className="ps-4">
              <h6 className={`${styles.detailsHeading}`}>
                ₦{user.accountBalance}
              </h6>
              <p className={`m-0 ${styles.heading}`}>
                {user.accountNumber}/Providus Bank
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Buttons
              buttons={[
                "General Details",
                "Documents",
                "Bank Details",
                "Loans",
                "Savings",
                "App and System",
              ]}
              submit={showPage}
            />
          </div>
        </section>
        <section className="shadow-sm">
          <div className="row">
            <h6>Personal Information</h6>
            <div>
              <p>name</p>
              <p>name</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Details;
