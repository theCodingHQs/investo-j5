import ImageGallery from "./image-gallery";
import Badge from "./badge";
import StatCard from "./stat-card";
import InfoCard from "./info-card";
import ContactForm from "./contact-form";

const PropertyDetailsHeroSection = () => {
  const propertyInfo = [
    { label: "Possession", value: "Dec 2025" },
    { label: "Price", value: "70 Lac - 2.5 Cr" },
    {
      label: "Type",
      value: "Under construction",
      icon: (
        <svg
          className="w-4 h-4 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    { label: "Floor", value: "22 Floors" },
    { label: "Area", value: "32.98 acres" },
    { label: "Towers", value: "9 Towers" },
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Image Gallery - Full Width */}
        <ImageGallery isNew={true} />

        {/* Content Section - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-6 ">
            {/* Badges and Stats */}
            <div className="flex flex-col bg-background p-2 px-4 gap-4 rounded-lg">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex gap-3">
                  <Badge variant="highlight">RERA Registered</Badge>
                  <Badge variant="highlight">Residential & Commercial</Badge>
                </div>
                <div className="flex items-center border-l border-border pl-4">
                  <StatCard value="2 - 5" label="BHK" />
                  <StatCard value="1285 - 2675" label="Sq Ft" />
                </div>
              </div>

              {/* Property Title */}
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">
                  Shapoorji Pallonji Sensorium Hinjewadi
                </h1>
                <p className="text-muted-foreground">Maharashtra, Pune</p>
              </div>

              {/* Price Section */}
              <div className="flex  flex-wrap items-center gap-6">
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    Rs. 71 L -2.5 Cr
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>EMI. 8,678/month</span>
                    <a
                      href="#"
                      className="text-link font-medium hover:underline"
                    >
                      Get pre-qualified
                    </a>
                  </div>
                </div>

                {/* Brochure Button */}
                <button className="ml-auto flex flex-col items-center gap-1 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <svg
                    className="w-5 h-5 text-link"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span className="text-sm text-muted-foreground">
                    Brochure
                  </span>
                </button>
              </div>
            </div>

            {/* Property Info Grid */}
            <div className="bg-background p-4 rounded-lg grid grid-cols-2 md:grid-cols-3 gap-3">
              {propertyInfo.map((info) => (
                <InfoCard
                  key={info.label}
                  label={info.label}
                  value={info.value}
                  icon={info.icon}
                />
              ))}
            </div>

            {/* View More */}
            <button className="text-link font-medium text-sm hover:underline flex items-center gap-1">
              View 6 more
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsHeroSection;
