import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import HeroSection from "@/components/home/HeroSection";

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
              h-[500px]

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
            <div
              className="
                h-full
                flex
                items-center
                justify-center

                text-slate-400
                dark:text-slate-500

                text-lg
                font-medium
              "
            >
              Interactive Map Coming Soon
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}