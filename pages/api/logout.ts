import { NextApiHandler } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "@/lib/config/iron-config";

const logoutRoute: NextApiHandler = (req, res) => {
  req.session.destroy();
  res.send({ ok: true });
};

export default withIronSessionApiRoute(logoutRoute, sessionOptions);
