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
  accountBalance: string;
  profile: Profile;
  education: Education;
  socials: Socials;
  guarantor: Guarantor;
  accountNumber: string;
  email: string;
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

  return (
    <>
      <section className={`p-3 p-xl-5 ${styles.bg}`}>
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
        <section className="shadow-sm mt-4 px-4 pt-4 bg-white rounded">
          <div className="d-flex align-items-center ">
            <div className="me-3">
              <Image
                className="rounded-circle"
                src={user?.profile?.avatar}
                width={100}
                height={100}
                alt="avatar"
              />
            </div>
            <div className="pe-4">
              <h6 className={`${styles.detailsHeading}`}>
                {user?.profile?.firstName} {user?.profile?.lastName}
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
                ₦{user?.accountBalance}
              </h6>
              <p className={`m-0 ${styles.heading}`}>
                {user?.accountNumber}/Providus Bank
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
        {navButtons === 0 && (
          <section className="shadow-sm mt-4 bg-white rounded p-4">
            <div className="row pb-3">
              <h6 className="mb-4">Personal Information</h6>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  full name
                </p>
                <p className={styles.info}>
                  {user?.profile?.firstName} {user?.profile?.lastName}
                </p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  phone number
                </p>
                <p className={styles.info}>{user?.profile?.phoneNumber}</p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  email address
                </p>
                <p className={styles.info}>{user?.email}</p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>bvn</p>
                <p className={styles.info}>{user?.profile?.bvn}</p>
              </div>
              <div className="col-3 mt-4">
                <p className={`m-0 text-uppercase ${styles.heading}`}>gender</p>
                <p className={styles.info}>{user?.profile?.gender}</p>
              </div>
              <div className="col-3 mt-4">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  marital status
                </p>
                <p className={styles.info}>Single</p>
              </div>
              <div className="col-3 mt-4">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  children
                </p>
                <p className={styles.info}>None</p>
              </div>
              <div className="col-3 mt-4">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  type of residence
                </p>
                <p className={styles.info}>Parent&apos;s Apartment</p>
              </div>
            </div>
            <div className="row border-top py-4">
              <h6 className="mb-4">Education and Employment</h6>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  level of education
                </p>
                <p className={styles.info}>{user?.education?.level}</p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  employment status
                </p>
                <p className={styles.info}>
                  {user?.education?.employmentStatus}
                </p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  sector of employment
                </p>
                <p className={styles.info}>{user?.education?.sector}</p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  Duration of employment
                </p>
                <p className={styles.info}>{user?.education?.duration}</p>
              </div>
              <div className="col-3 mt-4">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  office email
                </p>
                <p className={styles.info}>{user?.education?.officeEmail}</p>
              </div>
              <div className="col-3 mt-4">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  Monthly income
                </p>
                <p className={styles.info}>
                  {" "}
                  ₦{user?.education?.monthlyIncome[0]} - ₦
                  {user?.education?.monthlyIncome[1]}
                </p>
              </div>
              <div className="col-3 mt-4">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  loan repayment
                </p>
                <p className={styles.info}>₦{user?.education?.loanRepayment}</p>
              </div>
            </div>
            <div className="row border-top py-4">
              <h6 className="mb-4">Socials</h6>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  Twitter
                </p>
                <p className={styles.info}>{user?.socials?.twitter}</p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  facebook
                </p>
                <p className={styles.info}>{user?.socials?.facebook}</p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  instagram
                </p>
                <p className={styles.info}>{user?.socials?.instagram}</p>
              </div>
            </div>
            <div className="row border-top py-4">
              <h6 className="mb-4">Guarantor</h6>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  full Name
                </p>
                <p className={styles.info}>
                  {user?.guarantor?.firstName} {user?.guarantor?.lastName}
                </p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  Phone Number
                </p>
                <p className={styles.info}>{user?.guarantor?.phoneNumber}</p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>
                  Address
                </p>
                <p className={styles.info}>{user?.guarantor?.address}</p>
              </div>
              <div className="col-3">
                <p className={`m-0 text-uppercase ${styles.heading}`}>Gender</p>
                <p className={styles.info}>{user?.guarantor?.gender}</p>
              </div>
            </div>
          </section>
        )}
        {navButtons === 1 && <p className="mt-4">Documents</p>}
        {navButtons === 2 && <p className="mt-4">Bank Details</p>}
        {navButtons === 3 && <p className="mt-4">Loans</p>}
        {navButtons === 4 && <p className="mt-4">Savings</p>}
        {navButtons === 5 && <p className="mt-4">App and System</p>}
      </section>
    </>
  );
};

export default Details;
