"use client";

import { useSession } from "next-auth/react";
import { useCartStore } from "@/store/cart.store";
import { useEffect } from "react";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const loadFromDatabase = useCartStore((state) => state.loadFromDatabase);
  const syncToDatabase = useCartStore((state) => state.syncToDatabase);

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      // User just logged in - load their cart from database
      loadFromDatabase();
    }
  }, [status, session, loadFromDatabase]);

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      // Sync cart every time user interacts with the app
      const handleFocus = () => {
        loadFromDatabase();
      };

      const handleBeforeUnload = () => {
        syncToDatabase();
      };

      window.addEventListener("focus", handleFocus);
      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("focus", handleFocus);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [status, session, loadFromDatabase, syncToDatabase]);

  return <>{children}</>;
}
