"use client";

import { createClient } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const supabase = createClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button onClick={handleSignOut}>
      <LogOut />
    </button>
  );
}
