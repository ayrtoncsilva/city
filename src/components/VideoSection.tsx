import { Play } from "lucide-react";

const VideoSection = () => (
  <section
    className="section-transition bg-black py-16 md:py-24 px-6 md:px-12 min-h-[400px] md:min-h-[1000px] flex items-center"
    data-observe="section"
  >
    <div className="max-w-7xl mx-auto w-full flex items-center justify-center">
      <button className="group flex items-center justify-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/50 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:scale-110">
          <Play
            size={28}
            className="text-white/70 group-hover:text-white ml-1 transition-colors"
          />
        </div>
      </button>
    </div>
  </section>
);

export default VideoSection;