import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404 = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Page not found" />
        <title>404 - Page not found</title>
      </Helmet>
      <ErrorMessage />
      <h2
        style={{
          color: "#78866b",
          fontSize: "34px",
          fontWeightt: "700",
          lineHeight: "28px",
          textAlign: "center",
        }}
      >
        Error 404
      </h2>
      <Link
        to="/"
        style={{
          marginTop: "20px",
          display: "block",
          color: "#78866b",
          fontSize: "28px",
          lineHeight: "26px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Go to main page
      </Link>
    </div>
  );
};

export default Page404;
