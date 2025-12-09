import React from 'react'

function Section3() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
            <h2 className="text-3xl font-bold text-black text-center">
                How Yepper Measures Your Campaigns
            </h2>

            {/* BAR CHART */}
            <div className="bg-white border rounded-xl shadow p-10 space-y-6">
                <h3 className="text-xl font-semibold text-black">Channel Performance (Bar Chart)</h3>
                <div className="w-full h-64 bg-gray-50 rounded-lg p-6 flex items-end gap-4">
                    <div className="bg-blue-500 h-1/3 w-10 rounded" />
                    <div className="bg-green-500 h-1/2 w-10 rounded" />
                    <div className="bg-yellow-500 h-3/4 w-10 rounded" />
                    <div className="bg-red-500 h-[85%] w-10 rounded" />
                    <div className="bg-purple-500 h-[60%] w-10 rounded" />
                </div>
                <p className="text-sm text-gray-600">
                    Each bar represents performance from Websites, Social Media, Influencers,
                    TV, and Billboards. Yepper tracks reach, clicks, engagement, and conversions.
                </p>
            </div>

            {/* PIE CHART */}
            <div className="bg-white border rounded-xl shadow p-10 space-y-6">
                <h3 className="text-xl font-semibold text-black">Budget Allocation (Pie Chart)</h3>
                <div className="w-full h-64 flex items-center justify-center">
                    <div className="relative w-56 h-56 rounded-full">
                    <div className="absolute inset-0 rounded-full border-[40px] border-blue-500 border-t-transparent" />
                    <div className="absolute inset-0 rounded-full border-[40px] border-green-500 border-l-transparent rotate-45" />
                    <div className="absolute inset-0 rounded-full border-[40px] border-yellow-500 border-r-transparent rotate-90" />
                    </div>
                </div>
                <p className="text-sm text-gray-600 text-center max-w-xl mx-auto">
                    Yepper shows where your money is going how much is spent on websites,
                    influencers, social media, TV, radio, and billboards.
                </p>
            </div>

            {/* LINE CHART */}
            <div className="bg-white border rounded-xl shadow p-10 space-y-6">
                <h3 className="text-xl font-semibold text-black">Growth Over Time (Line Chart)</h3>
                <div className="w-full h-64 bg-gray-50 rounded-lg p-6 relative">
                    <svg className="w-full h-full">
                    <polyline
                        fill="none"
                        stroke="rgb(59,130,246)"
                        strokeWidth="4"
                        points="10,150 80,120 150,100 220,130 290,90 360,110 430,70"
                    />
                    </svg>
                </div>
                <p className="text-sm text-gray-600 text-center max-w-xl mx-auto">
                    This shows how your exposure, clicks, and conversions grow week-by-week
                    across all channels.
                </p>
            </div>
        </section>
    )
}

export default Section3