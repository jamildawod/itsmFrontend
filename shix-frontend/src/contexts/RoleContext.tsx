import { createContext, useContext, useState } from "react";

type Role = "agent" | "user";

const RoleContext = createContext<{
  role: Role;
  setRole: (r: Role) => void;
}>({
  role: "user",
  setRole: () => {},
});

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("agent");

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
