import { Image } from "@/api/types/project";

interface ImageGalleryProps {
  isNew?: boolean;
  gallery: Image[];
}

const ImageGallery = ({ isNew = true, gallery }: ImageGalleryProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {/* Main Image - Takes 2 columns */}
      <div className="lg:col-span-2 relative  overflow-hidden rounded-lg  border">
        <img
          src={gallery[0]?.location}
          alt="Property exterior"
          className="w-full h-64 md:h-80 lg:h-[340px] object-cover hover:scale-105 transition-transform cursor-pointer "
        />

        {/* New Launch Badge */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-background px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-foreground"></span>
            <span className="text-sm font-medium text-foreground">
              New Launch
            </span>
          </div>
        )}

        {/* Save & Share Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="bg-background px-4 py-1.5 rounded-md text-sm font-medium text-foreground shadow-sm hover:bg-muted transition-colors">
            Save
          </button>
          <button className="bg-background px-4 py-1.5 rounded-md text-sm font-medium text-foreground shadow-sm hover:bg-muted transition-colors flex items-center gap-1.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Share
          </button>
        </div>
      </div>

      {/* Right Column - 2x2 Thumbnail Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Top row - 2 thumbnails */}
        <div className=" overflow-hidden rounded-lg  border">
          <img
            src={gallery[1]?.location}
            alt="Living room"
            className="  w-full h-32 lg:h-[164px] object-cover hover:scale-105 transition-transform cursor-pointer"
          />
        </div>
        <div className=" overflow-hidden rounded-lg  border">
          <img
            src={gallery[2]?.location}
            alt="Interior design"
            className="  w-full h-32 lg:h-[164px] object-cover hover:scale-105 transition-transform cursor-pointer"
          />
        </div>

        {/* Bottom row - 1 image spanning full width with overlay buttons */}
        <div className="col-span-2 relative  overflow-hidden rounded-lg  border">
          <img
            src={gallery[0]?.location}
            alt="Bedroom"
            className="  w-full h-32 lg:h-[164px] object-cover hover:scale-105 transition-transform cursor-pointer"
          />
          {/* Overlay Buttons */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button className="bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-medium text-foreground shadow-sm hover:bg-background transition-colors">
              Floor Plans & Layout
            </button>
            <button className="bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-medium text-foreground shadow-sm hover:bg-background transition-colors">
              + 26 More Photos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
