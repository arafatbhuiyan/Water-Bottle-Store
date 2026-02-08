import { Suspense } from "react";
import Bottles from "./component/bottles/Bottles";

function App() {
  const bottlesPromes = fetch("/bottle.json").then((res) => res.json());

  return (
    <div className="container ml-20 mr-20 ">
      <h1 className="text-center font-bold text-3xl mt-3">Buy Awasome water bottle</h1>

      <Suspense fallback={<h1 className=" flex justify-center items-center h-screen text-2xl font-bold text-gray-600">Loading...</h1>}>
        <Bottles bottlesPromes={bottlesPromes} />
      </Suspense>
    </div>
  );
}

export default App;
