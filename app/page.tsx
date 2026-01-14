"use client"

import { ArrowLeft, Download, Share2 } from "lucide-react"

export default function ProjectDetails() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2a1425" }}>
      {/* Header Navigation */}
      <header
        className="border-b"
        style={{ borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      >
        <div className="flex items-center gap-4 px-6 py-4">
          <button className="text-white hover:opacity-80">
            <ArrowLeft size={24} />
          </button>
          <nav className="flex items-center justify-center gap-8 flex-1">
            <div
              className="flex items-center gap-8 px-8 py-3 rounded-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <a href="#" className="text-white text-sm font-medium hover:opacity-80">
                Project Overview
              </a>
              <a href="#" className="text-white text-sm font-medium hover:opacity-80">
                Floor Plans
              </a>
              <a href="#" className="text-white text-sm font-medium hover:opacity-80">
                Connectivity
              </a>
              <a href="#" className="text-white text-sm font-medium hover:opacity-80">
                Amenities
              </a>
              <a href="#" className="text-white text-sm font-medium hover:opacity-80">
                Price insights
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Main Image */}
          <div className="col-span-2">
            <div className="relative rounded-3xl overflow-hidden">
              <img src="/modern-residential-apartment-building.jpg" alt="Building" className="w-full h-96 object-cover" />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-gray-800">
                  🔵 New Launch
                </span>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="px-6 py-2 rounded-lg bg-white text-gray-800 font-medium hover:bg-gray-100">
                  Save
                </button>
                <button className="px-6 py-2 rounded-lg bg-white text-gray-800 font-medium hover:bg-gray-100 flex items-center gap-2">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Side Images */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img src="/modern-living-room.png" alt="Interior 1" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/luxury-apartment-bedroom.png" alt="Interior 2" className="w-full h-32 object-cover" />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative">
              <img src="/modern-apartment-living-space.jpg" alt="Interior 3" className="w-full h-32 object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-sm font-semibold">Floor Plans & Layout</div>
                  <div className="text-xs">+ 26 More Photos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="col-span-2">
            <div className="bg-white rounded-3xl p-8">
              {/* Badges */}
              <div className="flex gap-3 mb-6">
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                  RERA Registered
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                  Residential & Commercial
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Shapoorji Pallonji Sensorium Hinjewadi</h1>
              <p className="text-gray-600 mb-6">Maharashtra, Pune</p>

              {/* Price Info */}
              <div className="mb-8">
                <p className="text-4xl font-bold text-gray-900 mb-2">Rs. 71 L -2.5 Cr</p>
                <div className="flex items-center gap-6">
                  <span className="text-gray-600">EMI. 8,678/month</span>
                  <button className="text-blue-600 font-semibold hover:underline">Get pre-qualified</button>
                </div>
              </div>

              {/* Spec Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">2 - 5</span>
                  <span className="text-gray-600">1285 - 2675</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">BHK</span>
                  <span className="text-gray-600">Sq Ft</span>
                </div>
              </div>

              {/* Brochure Button */}
              <button className="mt-6 px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 flex items-center gap-2">
                <Download size={18} />
                Brochure
              </button>
            </div>

            {/* Property Details Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-gray-600 text-sm mb-2">Possession</p>
                <p className="text-xl font-bold text-gray-900">Dec 2025</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-gray-600 text-sm mb-2">Price</p>
                <p className="text-xl font-bold text-gray-900">70 Lac - 2.5 Cr</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-gray-600 text-sm mb-2">Type</p>
                <p className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2">
                  🏗️ Under construction
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-gray-600 text-sm mb-2">Floor</p>
                <p className="text-xl font-bold text-gray-900">22 Floors</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-gray-600 text-sm mb-2">Area</p>
                <p className="text-xl font-bold text-gray-900">32.98 acres</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-gray-600 text-sm mb-2">Towers</p>
                <p className="text-xl font-bold text-gray-900">9 Towers</p>
              </div>
            </div>

            <button className="text-white text-sm mt-6 hover:opacity-80">View 6 more +</button>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-3xl p-8 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Thinking of buying?</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Comment</label>
                <textarea
                  placeholder="Enter your comment"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 mt-6"
              >
                Inquire Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
