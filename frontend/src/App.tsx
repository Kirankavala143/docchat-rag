
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

import { LandingPage } from "@/components/landing/LandingPage";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Workspace } from "@/components/layout/Workspace";
import { useAuth } from "@/contexts/AuthContext";

export default function App() {
  const { token } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    if (!token) {
      setShowAuth(false);
    }
  }, [token]);

  return (
    <>
      {!token && !showAuth ? (
        <LandingPage onGetStarted={() => setShowAuth(true)} />
      ) : (
        <ProtectedRoute>
          <Workspace />
        </ProtectedRoute>
      )}

      <Toaster
        richColors
        closeButton
        position="bottom-right"
        toastOptions={{ className: "text-sm" }}
      />
    </>
  );
}
