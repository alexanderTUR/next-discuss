import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div>
        <form action={actions.signIn}>
          <Button type="submit">Sign in</Button>
        </form>
      </div>
      <div>
        <form action={actions.signOut}>
          <Button type="submit">Sign Out</Button>
        </form>
      </div>
      {session?.user ? (
        <div>
          <h1>Welcome {session.user.name}</h1>
        </div>
      ) : (
        <div>
          <h1>Not signed in</h1>
        </div>
      )}

      <Profile />
    </>
  );
}
