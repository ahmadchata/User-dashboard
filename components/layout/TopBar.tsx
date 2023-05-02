import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "/styles/Dashboard.module.scss";

const TopBar: React.FC = () => {
  return (
    <header
      className={`d-flex justify-content-between align-items-center ${styles.topBar}`}
    >
      <div
        className={`col-5 d-flex justify-content-between align-items-center ${styles.searchBar}`}
      >
        <input
          type="text"
          id="search"
          className="col-9 ps-3"
          placeholder="Search for anything"
        />
        <div className={`py-2 px-3 ${styles.glassBg}`}>
          <FontAwesomeIcon icon={faSearch} color="#fff" />
        </div>
      </div>

      <div className={`d-flex align-items-center ${styles.switch}`}>
        <div className={`d-flex justify-content-between align-items-center`}>
          <button
            className={`btn ${styles.icons} d-flex justify-content-center align-items-center`}
          >
            Docs
          </button>
          <button
            className={`btn ${styles.icons} d-flex justify-content-center align-items-center`}
          >
            <FontAwesomeIcon icon={faBell} size="lg" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
