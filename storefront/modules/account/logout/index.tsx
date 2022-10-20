import { useAccount } from "@lib/context/account-context";
import Button from "@modules/components/Button";

const Logout = () => {
  const { customer, handleLogout } = useAccount();

  return (
    <div className="mt-5 space-y-4">
      <div>
        <p>Signed In as: {customer?.first_name}</p>
        <p>Email: {customer?.email} </p>
      </div>
      <Button text="Log Out" onClick={() => handleLogout()} />
    </div>
  );
};

export default Logout;
