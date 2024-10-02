import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-6xl font-serif ">HI! I'M KANG_JIWON<br/>AND I'M ...</p>
        <p className="text-xl">맹물학교 (전)전교일등<br/><br/>디미고 가고시프다<br/><br/>코딩 1년차</p>

        <Link href={"/introduce"}>About me..</Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
