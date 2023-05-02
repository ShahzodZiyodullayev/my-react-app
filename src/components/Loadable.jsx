import { Suspense } from "react";
import Loader from "./Loader";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
      {/* <Loader /> */}
    </Suspense>
  );
};

export default Loadable;
