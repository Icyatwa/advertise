// Home.js
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Dropdown from '../components/AdvertiseDropDown';
import Dash from '../img/Rectangle 254.png'
import Media from '../img/Rectangle 254 (1).png'
import AI from '../img/Rectangle 254 (2).png'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-5xl font-bold text-black leading-tight">
            A get ready for upcoming Ad campaigns
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Yepper helps businesses run ads across websites, social media, influencers,
            billboards, TV, radio, and more all inside one unified dashboard that tracks
            everything in real time.
          </p>
        </motion.div>

        {/* Dropdown stays */}
        <Dropdown />
      </div>

      {/* IMAGE MOCKUPS WHAT YEPER LOOKS LIKE */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        <h2 className="text-3xl font-bold text-black text-center">
          What Yepper Looks Like
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-xl shadow p-6 flex flex-col items-center gap-3">
            <img src={Dash} alt='dash' className='w-full h-40 object-cover rounded-lg'/>
            <p className="text-gray-700 text-center text-sm">
              Dashboard preview see all campaigns, traffic, ad spend, and channel
              performance in one unified view.
            </p>
          </div>

          <div className="bg-white border rounded-xl shadow p-6 flex flex-col items-center gap-3">
            <img src={Media} alt='media' className='w-full h-40 object-cover rounded-lg'/>
            <p className="text-gray-700 text-center text-sm">
              Campaign creation build ads for TV, websites, influencers, radio, and
              billboards in minutes.
            </p>
          </div>

          <div className="bg-white border rounded-xl shadow p-6 flex flex-col items-center gap-3">
            <img src={AI} alt='ai' className='w-full h-40 object-cover rounded-lg'/>
            <p className="text-gray-700 text-center text-sm">
              Yepper AI generates ads, analyzes performance, and recommends channels
              automatically.
            </p>
          </div>
        </div>
      </section>

      {/* CHART SECTION BAR, PIE, LINE */}
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

      {/* INDUSTRY EXAMPLES */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <h2 className="text-3xl font-bold text-black text-center">
          Designed for Every Industry
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Hotels & Hospitality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Promote rooms, events, and offers across travel blogs, influencers,
              local websites, and airport screens with one click.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Universities & Schools</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advertise admissions, scholarships, academic programs across education
              platforms, radio stations, and youth influencers.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">Banks & Corporates</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Run campaigns for loans, cards, and financial products across
              billboards, news websites, LinkedIn influencers, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}