import { createContext, useContext, useState } from "react";

type User = {
  email: string;
  role: "agent" | "user";
};

const AuthContext = createContext<{
  user: User | null;
  loginAsAgent: () => void;
  loginAsUser: () => void;
  logout: () => void;
}>({
  user: null,
  loginAsAgent: () => {},
  loginAsUser: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>({
    email: "agent@acme.se",
    role: "agent",
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        loginAsAgent: () =>
          setUser({ email: "agent@acme.se", role: "agent" }),
        loginAsUser: () =>
          setUser({ email: "user@acme.se", role: "user" }),
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
