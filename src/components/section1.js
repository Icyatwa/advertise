import React from 'react'
import { motion } from 'framer-motion';
import Dropdown from './AdvertiseDropDown';
import Orange1 from '../img/orange1.png'

function section1() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
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
        </>
        
    )
}

export default section1