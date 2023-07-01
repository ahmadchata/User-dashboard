export const sessionOptions = {
  password: "zQo4T8apfbdwctV1Cso1oAndQT9qwC95",
  cookieName: "APP_COOKIE",
  cookieOptions: {
    maxAge: 60 * 60 * 24 * 2, // 2 days
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};
