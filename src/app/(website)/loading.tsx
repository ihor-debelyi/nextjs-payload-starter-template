import { CircularProgress } from "@nextui-org/progress";

const Loading = () => {
  return (
    <CircularProgress
      className="mx-auto"
      classNames={{ svg: "w-24 h-24 drop-shadow-md" }}
      aria-label="Loading page ..."
    />
  );
};

export default Loading;
