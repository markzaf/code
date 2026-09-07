import Header from "../components/Header";
import VideoCard from "../components/VideoCard";
import UploadSheet from "../components/UploadSheet";

const sampleVideos = new Array(8).fill(0).map((_,i)=>({
  id: `${i+1}`,
  title: `Sample video title ${i+1}`,
  channel: `Channel ${i%3+1}`,
  views: `${Math.floor(Math.random()*2000)+100}K`,
  duration: `${Math.floor(Math.random()*20)+1}:${Math.floor(Math.random()*60).toString().padStart(2,'0')}`,
  thumbnail: `https://images.unsplash.com/photo-1542206395-9feb3edaa68e?w=1200&q=80&auto=format&fit=crop&cs=tinysrgb`
}))

export default function Home({ toggleDark, dark }) {
  return (
    <>
      <Header toggleDark={toggleDark} dark={dark}/>
      <main className="px-4 md:px-0 py-4">
        <section aria-label="Top feed" className="space-y-4">
          <h2 className="sr-only">Home feed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleVideos.map(v=> <VideoCard key={v.id} video={v} />)}
          </div>
        </section>
      </main>

      <UploadSheet />
      <nav aria-hidden className="fixed bottom-0 left-0 right-0 bg-white dark:bg-darkElevated border-t dark:border-t-0 md:hidden">
        <div className="max-w-[1100px] mx-auto flex justify-around py-2">
          <button className="flex flex-col items-center text-sm text-midgray">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5"/></svg>
            <span>Home</span>
          </button>
          <button className="flex flex-col items-center text-sm text-midgray">
            <svg width="20" height="20"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /></svg>
            <span>Explore</span>
          </button>
          <button aria-label="Upload" className="flex items-center justify-center -mt-4">
            <div className="bg-brand p-3 rounded-full shadow-lg text-white">+</div>
          </button>
          <button className="flex flex-col items-center text-sm text-midgray">
            <svg width="20" height="20"><rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
            <span>Subscriptions</span>
          </button>
          <button className="flex flex-col items-center text-sm text-midgray">
            <svg width="20" height="20"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5"/></svg>
            <span>Library</span>
          </button>
        </div>
      </nav>
    </>
  )
}
