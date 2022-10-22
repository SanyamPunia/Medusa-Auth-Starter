import { medusaClient } from "@lib/config";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import Register from "@modules/account/register";
import { useAccount } from "@lib/context/account-context";
import Button from "@modules/components/Button";

interface SignInCredentials {
  email: string;
  password: string;
}

const Login = () => {
  const [isViewLogin, setIsViewLogin] = useState<boolean>(true);
  const router = useRouter();
  const [authError, setAuthError] = useState<string | undefined>(undefined);
  const { refetchCustomer } = useAccount();

  const handleError = (_e: Error) => {
    setAuthError("Invalid email or error");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>();

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer();
        router.push("/store");
      })
      .catch(handleError);
  });

  if (isViewLogin) {
    return (
      <div className="w-3/4 mx-auto 2xl:w-1/3 md:w-1/2 mt-10 shadow-sm">
        <div className="border rounded-sm border-gray-300 p-6">
          <h1 className="font-playfair mb-7 text-2xl">Login</h1>
          <form
            className="font-notosans text-sm  flex flex-col gap-5"
            onSubmit={onSubmit}
          >
            <input
              className="base-input" // Check globals.css
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              className="base-input"
              placeholder="Password"
              {...register("password", { required: true })}
              type="password"
            />
            <div className="mx-auto">
              <Button text="Log In" type="submit" />
            </div>
          </form>

          {authError && (
            <h1 className="mt-3 font-notosans text-sm text-red-400">
              These credentials do not match our records
            </h1>
          )}

          <h1 className="mt-5 italic text-gray-500">
            Not a member? Register{" "}
            <span
              className="text-red-500 cursor-pointer transition hover:text-red-700"
              onClick={() => setIsViewLogin(false)}
            >
              here
            </span>
          </h1>
        </div>
      </div>
    );
  } else {
    return <Register />;
  }
};

export default Login;
