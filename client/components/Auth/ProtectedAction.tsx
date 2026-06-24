"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface ProtectedActionProps {
  children: ReactNode;
  onProtectedAction: () => void;
}

export default function ProtectedAction({
  children,
  onProtectedAction,
}: ProtectedActionProps) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    if (!isLoggedIn) {
      router.push("/auth");
      return;
    }

    onProtectedAction();
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}