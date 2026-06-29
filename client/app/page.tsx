import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import HeroSection from "@/components/home/HeroSection";
import Map from "@/components/map/Map";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#F5F7FB] dark:bg-[#07111F] transition-colors duration-300">
      <Sidebar />

      <section className="flex-1 overflow-auto">
        <Topbar />

        <div className="px-6 pb-6">
          <HeroSection />

          <section
            className="
              mt-6
              h-[650px]
              w-full

              overflow-hidden

              rounded-[32px]

              bg-white
              dark:bg-slate-900

              border
              border-slate-200
              dark:border-slate-800

              shadow-sm

              transition-all
              duration-300
            "
          >
            <Map />
          </section>
        </div>
      </section>
    </main>
  );
}