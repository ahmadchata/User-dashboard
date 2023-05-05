import { useMemo, useEffect, useState, useCallback, useRef } from "react";
import styles from "/styles/Users.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faEllipsisVertical,
  faEye,
  faPager,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../layout/Table";
import axios from "axios";
import Moment from "react-moment";
import Link from "next/link";

type User = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
};

type Card = {
  id: number;
  label: string;
  color: string;
  background: string;
  icon: any;
  numbers: string;
};

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    xPos: string;
    yPos: string;
    id: string;
    showMenu: boolean;
  }>({
    xPos: "0px",
    yPos: "0px",
    id: "",
    showMenu: false,
  });
  const detailsRef = useRef<HTMLUListElement>(null);

  // Get Users
  const getUsers = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<User[]>(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users",
        {
          timeout: 15000, // Add 15 seconds timeout
        }
      );
      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      setError(true);
      // console.error(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  // Close details menu on click outside
  useEffect(() => {
    const handler = (event: any) => {
      if (!detailsRef.current) {
        return;
      }
      if (!detailsRef.current.contains(event.target)) {
        setPosition((prev) => ({
          ...prev,
          showMenu: false,
        }));
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  // Open details menu
  const openOptions = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setPosition({
      xPos: `${e.pageX}px`,
      yPos: `${e.pageY}px`,
      id: id,
      showMenu: true,
    });
  }, []);

  const cards = useMemo<Card[]>(
    () => [
      {
        id: 1,
        label: "Users",
        color: "#DF18FF",
        background: "#f9e9fd",
        icon: faUser,
        numbers: users?.length.toString() || "0",
      },
      {
        id: 2,
        label: "active users",
        color: "#5718FF",
        background: "#ede8fd",
        icon: faUsers,
        numbers: "100",
      },
      {
        id: 3,
        label: "users with loans",
        color: "#F55F44",
        background: "#f55f441a",
        icon: faPager,
        numbers: "2,453",
      },
      {
        id: 4,
        label: "users with savings",
        color: "#FF3366",
        background: "#ff33661a",
        icon: faCoins,
        numbers: "2,453",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "ORGANIZATION",
        accessor: "orgName",
        sortType: "basic",
      },
      {
        Header: "USERNAME",
        accessor: "userName",
        sortType: "basic",
      },
      {
        Header: "EMAIL",
        accessor: "email",
        sortType: "basic",
      },
      {
        Header: "PHONE NUMBER",
        accessor: "phoneNumber",
      },
      {
        Header: "DATE JOINED",
        accessor: "createdAt",
        Cell: ({ cell }: any) => {
          const p = cell.row.original;
          return (
            <div>
              <Moment format="MMM D, YYYY LT">{p.createdAt}</Moment>
            </div>
          );
        },
      },
      {
        Header: "STATUS",
        accessor: "",
        Cell: ({ cell }: any) => {
          const p = cell.row.original;
          return (
            <div className="d-flex align-items-center">
              <a className={`px-3 py-2 ${styles.status}`}>Active</a>
              <div
                id="menu"
                onClick={(e) => openOptions(e, p.id)}
                className={styles.details}
              >
                <FontAwesomeIcon icon={faEllipsisVertical} color="#000" />
              </div>
            </div>
          );
        },
      },
    ],
    [openOptions]
  );
  const data = useMemo(() => users, [users]);

  return (
    <div className={`p-3 p-xl-5`}>
      <h1 className={styles.h1}>Users</h1>
      <div className="my-4 row">
        {cards.map((card) => (
          <div key={card.id} className="col">
            <div className={`shadow-sm p-4  mb-4 ${styles.card}`}>
              <FontAwesomeIcon
                icon={card.icon}
                color={card.color}
                style={{
                  backgroundColor: card.background,
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
              <h5 className={`${styles.heading} my-3 text-uppercase`}>
                {card.label}
              </h5>
              <p className={styles.numbers}>{card.numbers}</p>
            </div>
          </div>
        ))}
      </div>
      {loading ? <p>Fetching data...</p> : null}
      {error ? (
        <p>Something went wrong, Please check your network</p>
      ) : (
        <Table columns={columns} data={data} />
      )}

      {position.showMenu ? (
        <ul
          ref={detailsRef}
          style={{
            top: position.yPos,
            left: `calc(${position.xPos} - 150px)`,
          }}
          className={`shadow-sm ${styles.detailsCard}`}
        >
          <Link
            href={{
              pathname: "users/[id]",
              query: { id: position.id },
            }}
            className="text-decoration-none text-muted"
          >
            <li>
              <FontAwesomeIcon icon={faEye} className="me-2" color="#545f7d" />
              View Details
            </li>
          </Link>
          <li className="my-3">
            <FontAwesomeIcon icon={faUser} className="me-2" color="#545f7d" />
            Blacklist User
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className="me-2" color="#545f7d" />
            Activate User
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Users;
