import { Suspense } from "react";
import Details from "../components/details";

export default function Heavy() {
  throw new Error("This is human error.");

  return (
    <div>
      <h1 className="text-3xl text-white">Heavy Page</h1>
      <Suspense fallback={<h1>Details Loading....</h1>}>
        <Details />
      </Suspense>
    </div>
  );
}
