import { useState } from "react";

export default function UploadSheet() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  const simulateUpload = () => {
    setOpen(true)
    setProgress(10)
    const iv = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(iv); return 100 }
        return p + Math.floor(Math.random()*15)
      })
    }, 700)
  }

  return (
    <>
      <button onClick={simulateUpload} className="fixed bottom-6 right-6 bg-brand p-4 rounded-full shadow-lg text-white z-40" aria-label="Upload">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M8 7l4-4 4 4M4 21h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-end">
          <div className="w-full bg-white dark:bg-darkElevated rounded-t-xl p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Uploading</h3>
              <button onClick={()=>setOpen(false)} aria-label="Close" className="p-2">✕</button>
            </div>
            <div className="mt-4">
              <div className="text-sm text-midgray mb-2">Uploading your video — processing in background when complete.</div>
              <div className="h-3 bg-gray-200 rounded overflow-hidden">
                <div className="h-full bg-brand" style={{width: `${Math.min(progress,100)}%`}}></div>
              </div>
              <div className="text-xs text-midgray mt-2">{Math.min(progress,99)}% • Processing may continue after upload</div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-2 rounded-md bg-brand text-white">View details</button>
                <button className="px-3 py-2 rounded-md border">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
