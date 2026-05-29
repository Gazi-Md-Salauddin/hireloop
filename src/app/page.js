import Image from "next/image";
import Banner from '@/components/Shared/Banner'
import StatsSection from '@/components/Shared/StatsSection'

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Banner/>
      <StatsSection/>
    </div>
  );
}
