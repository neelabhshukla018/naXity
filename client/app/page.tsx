import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 p-10">
        <h1 className="text-6xl font-bold">
          Welcome to naXity
        </h1>
      </section>
    </main>
  );
}