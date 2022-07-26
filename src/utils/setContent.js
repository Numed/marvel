import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Spinner from "../components/spinner/Spinner";
import Skeletion from "../components/skeleton/Skeleton";

const setContent = (process, Component, data) => {
  switch (process) {
    case "waiting":
      return <Skeletion />;
      break;
    case "loading":
      return <Spinner />;
      break;
    case "confirmed":
      return <Component data={data} />;
      break;
    case "error":
      return <ErrorMessage />;
      break;
    default:
      throw new Error("Unexpected process state");
  }
};

export default setContent;
