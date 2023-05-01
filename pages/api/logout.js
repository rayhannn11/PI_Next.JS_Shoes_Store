import { serialize } from "cookie";

const handler = (req, res) => {
  if (req.method === "DELETE") {
    /* remove cookies from request header */
    res.setHeader("Set-Cookie", [
      serialize("token", "", {
        maxAge: -1,
        path: "/",
      }),
    ]);

    res.writeHead(302, { Location: "/admin/login" });
    res.end();
  }
};

export default handler;
