import { medusaClient } from "@lib/config";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Login from "@modules/account/login";
import { useAccount } from "@lib/context/account-context";
import Button from "@modules/components/Button";

interface RegisterCredentials {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(true);
  const router = useRouter();
  const { refetchCustomer } = useAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>();

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer();
        router.push("/store");
      })
      .catch((err) => console.log(err));
  });

  if (isRegisterVisible) {
    return (
      <div className="w-3/4 mx-auto 2xl:w-1/3 md:w-1/2 mt-10 shadow-sm">
        <div className="border rounded-sm border-gray-300 p-6">
          <h1 className="font-playfair mb-7 text-2xl">Register</h1>
          <form
            className="font-notosans text-sm flex flex-col gap-5"
            onSubmit={onSubmit}
          >
            <input
              className="base-input" // Check globals.css
              {...register("first_name", { required: true })}
              placeholder="First Name"
            />
            <input
              className="base-input"
              {...register("last_name", { required: true })}
              placeholder="Last Name"
            />
            <input
              className="base-input"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            <input
              className="base-input"
              {...register("password", { required: true })}
              placeholder="Password"
              type="password"
            />
            <div className="mx-auto">
              <Button text="Register" type="submit" />
            </div>
          </form>
          <h1 className="mt-5 italic text-gray-500">
            Already a member? Login{" "}
            <span
              className="text-red-500 cursor-pointer transition hover:text-gray-500"
              onClick={() => setIsRegisterVisible(false)}
            >
              here
            </span>
          </h1>
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
};

export default Register;
