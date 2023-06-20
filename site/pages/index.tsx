import type { NextPage } from "next";
import Link from "next/link";
import { initFirebase } from "../firebase/firebaseApp";

const Home: NextPage = () => {
  const app = initFirebase();
  console.log(app);
  return (
    <div className="text-center flex flex-col gap-4 items-center">
      <div>Please sign in to continue</div>
      <Link href="/dashboard">
        <a className="bg-blue-600 text-white rounded-md p-2 w-48">Sign In</a>
      </Link>
    </div>
  );
};

export default Home;
