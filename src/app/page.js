import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello from Next Hero
      <Heading/>
      <button>
        Call Me
      </button>
    </main>
  );
}
