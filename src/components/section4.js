import React from 'react'

function Section4() {
    return (
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
    )
}

export default Section4