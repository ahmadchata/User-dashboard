import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faMoneyBill,
  faPiggyBank,
  faUser,
  faUsers,
  faHandshake,
  faMoneyBill1Wave,
  faUserEdit,
  faBriefcase,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "/styles/Dashboard.module.scss";

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={`py-5 bg-white ${styles.nav}`}>
      <div className={`d-flex justify-content-start ps-4`}>
        <Image src="/assets/logo.png" width={145} height={30} alt="logo" />
      </div>
      <ul className="list-unstyled mt-5">
        <li className={`mb-5`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faBriefcase} className="me-3" />
            <span className="me-2">Switch Organization</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </li>
        <li
          className={`mb-2 ${
            router.pathname === "/dashboard" && `${styles.selected}`
          }`}
        >
          <Link href="/dashboard" legacyBehavior>
            <a className={`ps-4 ${styles.link}`}>
              <FontAwesomeIcon icon={faHome} className="me-3" />
              <span>Dashboard</span>
            </a>
          </Link>
        </li>
        <p className={`text-uppercase fw-bold mt-4 ps-4`}>Customers</p>
        <li
          className={`mb-2 ${
            router.pathname === "/dashboard/users" && `${styles.selected}`
          }`}
        >
          <Link href="/dashboard/users" legacyBehavior>
            <a className={`ps-4 ${styles.link}`}>
              <FontAwesomeIcon icon={faUser} className="me-3" />
              <span>Users</span>
            </a>
          </Link>
        </li>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faUsers} className="me-3" />
            <span>Guarantors</span>
          </a>
        </li>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faMoneyBill} className="me-3" />
            <span>Loans</span>
          </a>
        </li>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faHandshake} className="me-3" />
            <span>Decision Models</span>
          </a>
        </li>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faPiggyBank} className="me-3" />
            <span>Savings</span>
          </a>
        </li>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faMoneyBill1Wave} className="me-3" />
            <span>Loan requests</span>
          </a>
        </li>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faUserEdit} className="me-3" />
            <span>Whitelist</span>
          </a>
        </li>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faUserEdit} className="me-3" />
            <span>Karma</span>
          </a>
        </li>
      </ul>
      <ul className="list-unstyled mt-5">
        <p className={`text-uppercase mt-4 ps-4`}>settings</p>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faCog} className="me-3" />
            <span>Preferences</span>
          </a>
        </li>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faCog} className="me-3" />
            <span>Fees and Pricing</span>
          </a>
        </li>
        <li className={`mb-2`}>
          <a className={`ps-4 ${styles.link}`}>
            <FontAwesomeIcon icon={faCog} className="me-3" />
            <span>Audit Logs</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
