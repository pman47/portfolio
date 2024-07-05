import Loader from "@/components/Loader";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className="grow inset-0 text-white flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default loading;
