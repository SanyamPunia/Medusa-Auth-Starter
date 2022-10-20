import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
} from "react";
import { Customer } from "@medusajs/medusa";
import { medusaClient } from "@lib/config";
import { useMeCustomer } from "medusa-react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

interface AccountContext {
  customer?: Omit<Customer, "password_hash">;
  retrievingCustomer: boolean;
  checkSession: () => void;
  refetchCustomer: () => void;
  handleLogout: () => void;
}

const AccountContext = createContext<AccountContext | null>(null);

const handleDeleteSession = () => {
  return medusaClient.auth.deleteSession();
};

interface AccountProviderProps {
  children?: ReactNode;
}

export const AccountProvider = ({ children }: AccountProviderProps) => {
  const {
    customer,
    isLoading: retrievingCustomer,
    refetch,
    remove,
  } = useMeCustomer({ onError: () => {} });
  const router = useRouter();

  const checkSession = useCallback(() => {
    if (!customer && !retrievingCustomer) {
      /**
       * Route to push to if no session is found
       */
      router.push("/");
    }
  }, [customer, retrievingCustomer, router]);

  const useDeleteSession = useMutation("delete-session", handleDeleteSession);

  const handleLogout = () => {
    useDeleteSession.mutate(undefined, {
      onSuccess: () => {
        remove();
        /**
         * Route to push to if user logs out of the session
         */
        router.push("/");
      },
    });
  };

  return (
    <AccountContext.Provider
      value={{
        customer,
        retrievingCustomer,
        checkSession,
        refetchCustomer: refetch,
        handleLogout,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  const context = useContext(AccountContext);

  if (context === null) {
    throw new Error("useAccount must be used within a AccountProvider");
  }

  return context;
};
