import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-5xl">Hola!!</span>
      <Link href={"/about"}>About</Link>
    </main>
  );
}
