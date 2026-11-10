import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center px-6 py-12">
      <Suspense>
        <SignIn />
      </Suspense>
    </div>
  );
}
