import Link from "next/link";
export default function VideoCard({ video }) {
  return (
    <article className="w-full">
      <Link href={`/watch/${video.id}`}>
        <a className="block group">
          <div className="relative overflow-hidden rounded-md shadow-card aspect-video">
            <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200" />
            <div className="absolute right-2 bottom-2 bg-black/60 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
          </div>
          <div className="mt-3 flex gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0" aria-hidden="true"></div>
            <div className="flex-1">
              <h3 className="text-[15px] font-semibold leading-5 text-text dark:text-darkPrimary">{video.title}</h3>
              <div className="text-sm text-midgray mt-1">{video.channel} • {video.views} views</div>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}
