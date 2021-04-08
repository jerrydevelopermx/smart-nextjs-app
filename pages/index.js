import { useRouter } from "next/router";

function RedirectPage() {
  const router = useRouter();
  // Make sure we're in the browser
  console.log("Hr");
  if (typeof window !== "undefined") {
    router.push("/store/home");
  }

  return null;
}

export default RedirectPage;
