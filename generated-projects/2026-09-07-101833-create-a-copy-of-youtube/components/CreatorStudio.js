import VideoCard from "./VideoCard";

const demo = new Array(6).fill(0).map((_,i)=>({
  id: `c${i+1}`,
  title: `My upload ${i+1}`,
  channel: `My Channel`,
  views: `${Math.floor(Math.random()*2000)} views`,
  duration: `${Math.floor(Math.random()*10)+1}:${Math.floor(Math.random()*60).toString().padStart(2,'0')}`,
  thumbnail: `https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1000&q=80`
}));

export default function CreatorStudio() {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Creator Studio</h2>
        <div className="flex items-center gap-2">
          <select className="border rounded-md p-2">
            <option>All</option>
            <option>Published</option>
            <option>Processing</option>
            <option>Private</option>
          </select>
          <button className="px-3 py-2 rounded-md bg-brand text-white">Upload</button>
        </div>
      </header>

      <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {demo.map(v=> (
          <div key={v.id} className="border rounded-md p-3">
            <VideoCard video={v} />
            <div className="mt-2 flex items-center justify-between">
              <div className="text-sm text-midgray">{v.views}</div>
              <div className="flex gap-2">
                <button className="px-2 py-1 border rounded-md">Edit</button>
                <button className="px-2 py-1 border rounded-md">Analytics</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Analytics (last 7 days)</h3>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="p-4 border rounded-md">
            <div className="text-sm text-midgray">Views</div>
            <div className="text-2xl font-semibold">12.4K</div>
            <div className="h-10 bg-gray-100 rounded mt-3"></div>
          </div>
          <div className="p-4 border rounded-md">
            <div className="text-sm text-midgray">Watch time (hrs)</div>
            <div className="text-2xl font-semibold">540</div>
            <div className="h-10 bg-gray-100 rounded mt-3"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
