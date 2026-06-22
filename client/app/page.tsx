import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-5xl font-bold">Welcome to naXity</h1>
      </div>
    </main>
  );
}