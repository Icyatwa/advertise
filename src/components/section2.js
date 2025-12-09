import React from 'react'
import Dash from '../img/Rectangle 254.png'
import Media from '../img/Rectangle 254 (1).png'
import AI from '../img/Rectangle 254 (2).png'

function Section2() {
    return (
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
    )
}

export default Section2