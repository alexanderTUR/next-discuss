"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return <h1>From Client: Welcome {session.data.user.name}</h1>;
  }
  return <h1>From Client: Not signed in</h1>;
}
