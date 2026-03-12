import { useState } from "react";
import { Play, X } from "lucide-react";

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="section-transition bg-black py-12 md:py-16 px-6 md:px-12 min-h-[300px] md:min-h-[500px] flex items-center"
        data-observe="section"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center">
          <button
            className="group flex items-center justify-center"
            onClick={() => setOpen(true)}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/50 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:scale-110">
              <Play
                size={28}
                className="text-white/70 group-hover:text-white ml-1 transition-colors"
              />
            </div>
          </button>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 md:px-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 text-white/80 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>

            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/c23Du0_99Ts?autoplay=1&rel=0"
                title="Vídeo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;