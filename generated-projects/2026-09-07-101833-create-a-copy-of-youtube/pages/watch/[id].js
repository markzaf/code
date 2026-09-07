import { useRouter } from "next/router";
import Header from "../../components/Header";
import Player from "../../components/Player";
import VideoCard from "../../components/VideoCard";

const related = new Array(6).fill(0).map((_,i)=>({
  id: `r${i+1}`,
  title: `Related video ${i+1}`,
  channel: `Creator ${i%4+1}`,
  views: `${Math.floor(Math.random()*1000)+10}K`,
  duration: `${Math.floor(Math.random()*20)+1}:${Math.floor(Math.random()*60).toString().padStart(2,'0')}`,
  thumbnail: `https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000&q=80&auto=format&fit=crop&cs=tinysrgb`
}))

export default function Watch({ toggleDark, dark }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header toggleDark={toggleDark} dark={dark}/>
      <main className="px-4 md:px-0 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <Player src="/sample-video.mp4" poster="https://via.placeholder.com/1200x675.png?text=Video+Poster" />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Sample video title #{id}</h1>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-medium">Channel Name</div>
                    <div className="text-sm text-midgray">240K subscribers</div>
                  </div>
                  <button className="ml-4 px-3 py-2 rounded-md bg-brand text-white">Subscribe</button>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 rounded-md border">Share</button>
                  <button className="px-3 py-2 rounded-md border">Save</button>
                </div>
              </div>

              <div className="mt-4 text-sm text-midgray">
                <details>
                  <summary className="cursor-pointer">Show description</summary>
                  <p className="mt-2">This is a sample description. It may contain timestamps, links, and captions info. The real implementation will support markdown and link parsing.</p>
                </details>
              </div>
            </div>

            <section aria-label="Comments" className="mt-6">
              <div className="sticky top-[64px] bg-transparent">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div className="flex-1">
                    <textarea aria-label="Add a public comment" placeholder="Add a public comment..." className="w-full rounded-md border p-3 min-h-[64px]"></textarea>
                    <div className="flex justify-end mt-2 gap-2">
                      <button className="px-3 py-2 rounded-md border">Cancel</button>
                      <button className="px-3 py-2 rounded-md bg-brand text-white">Comment</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <div className="p-3 rounded-md border">
                  <div className="font-medium">User123</div>
                  <div className="text-sm text-midgray">Great video!</div>
                </div>
                <div className="p-3 rounded-md border">
                  <div className="font-medium">Viewer456</div>
                  <div className="text-sm text-midgray">Thanks for the tips.</div>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-3 md:col-span-1">
            <h3 className="text-sm font-semibold">Up next</h3>
            <div className="space-y-3">
              {related.map(v=> <VideoCard key={v.id} video={v} />)}
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
