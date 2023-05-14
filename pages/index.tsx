import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { withSessionSsr } from "@/lib/withSession";

interface User {
  username: string;
  isAdmin: boolean;
}

interface Props {
  user: User;
}

const Home: React.FC<Props> = ({ user }) => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);

  const togglePasswordShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    let password = document.querySelector("#password") as HTMLInputElement;
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  type FormValues = {
    email: string;
    password: string;
  };

  // Form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  // Get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  // Submit form for signing in
  const onSubmit = async (data: FormValues) => {
    setLoginError(false);
    setLogin(true);
    try {
      const response = await axios.post<User>(`/api/session`, {
        email: data.email,
        password: data.password,
      });
      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      setLoginError(true);
      setLogin(false);
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard | Login</title>
        <meta name="description" content="Dashboard Login" />
      </Head>
      <nav className="p-4">
        <Image src="/assets/logo.png" width={174} height={36} alt="logo" />
      </nav>
      <div className={`wrapper`}>
        <main className={`row mx-0`}>
          <div
            className={`${styles.bg} d-none d-lg-flex col-7 justify-content-center align-items-center`}
          >
            <Image
              src="/assets/bg/sign-in.png"
              width={600}
              height={338}
              alt="logo"
            />
          </div>
          {user.isAdmin ? (
            <div
              className={`col px-5 d-flex flex-column ${styles.bg} text-center justify-content-center`}
            >
              Logged in as {user.username}
              <button
                className="btn btn-success mt-4"
                onClick={() => router.push("/dashboard")}
              >
                Continue to dashboard
              </button>
            </div>
          ) : (
            <div
              className={`col px-5 d-flex flex-column ${styles.bg} justify-content-center`}
            >
              <h1 className={styles.title}>Welcome!</h1>
              <small className={styles.details}>Enter details to login</small>
              <form onSubmit={handleSubmit(onSubmit)} className={`mt-5`}>
                <div className={`${styles.formGroup} mb-4`}>
                  <div
                    className={`${styles.inputGroup} form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  >
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Email"
                    />
                  </div>
                  {errors?.email && (
                    <div className="invalid-feedback bg-white">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className={`${styles.formGroup}`}>
                  <div
                    className={`${
                      styles.inputGroup
                    } d-flex justify-content-between form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  >
                    <input
                      placeholder="Password"
                      type="password"
                      {...register("password")}
                      id={`password`}
                    />
                    <button
                      onClick={togglePasswordShow}
                      className="green btn fw-bold"
                    >
                      {showPassword ? "HIDE" : "SHOW"}
                    </button>
                  </div>
                  {errors?.password && (
                    <div className="invalid-feedback bg-white">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                {loginError && (
                  <div className="mt-3 text-danger">Invalid login details</div>
                )}
                <div className="mt-3">
                  <Link
                    href="/"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "#39cdcc",
                      textDecoration: "none",
                    }}
                  >
                    FORGOT PASSWORD?
                  </Link>
                </div>

                <button
                  disabled={login}
                  type="submit"
                  className={`w-100 py-3 rounded mt-4 ${styles.formBtn}`}
                >
                  {login ? "Signing in..." : "LOG IN"}
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export const getServerSideProps = withSessionSsr(async function ({ req }) {
  const user = req.session.user;

  if (!user) {
    return { props: { user: { username: "", isAdmin: false } } };
  }

  return {
    props: { user: req.session.user },
  };
});

export default Home;
