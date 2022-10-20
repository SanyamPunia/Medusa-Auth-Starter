import { useAccount } from "@lib/context/account-context";
import Logout from "@modules/account/logout";
import Link from "next/link";

const Nav = () => {
  const { customer } = useAccount();

  return (
    <header className="py-20 pb-10 container mx-auto">
      <nav className="font-playfair sticky top-0 text-center">
        <h1 className="text-3xl">
          <Link href={customer ? "/store" : "/"}>
            <a>Medusa</a>
          </Link>
        </h1>
        {customer ? <Logout /> : <h1 className="mt-5">Not Signed In</h1>}
      </nav>
    </header>
  );
};

export default Nav;
