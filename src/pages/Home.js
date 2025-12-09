// Home.js
import Navbar from '../components/Navbar';
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* HERO SECTION */}
      <Section1 />

      {/* IMAGE MOCKUPS WHAT YEPER LOOKS LIKE */}
      <Section2 />

      {/* CHART SECTION BAR, PIE, LINE */}
      <Section3 />

      {/* INDUSTRY EXAMPLES */}
      <Section4 />
      
    </div>
  );
}