import React from 'react';

const Awards = () => {
    return (
        <section id="awards" className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">Awards & Leadership</h2>

            <div className="space-y-6 text-left text-gray-300">
                <div>
                    <h3 className="text-xl font-semibold text-white">Elevate Award & Heald Scholarship</h3>
                    <p className="text-sm text-gray-400">Illinois Institute of Technology • 2019</p>
                    <p>Recognized for academic achievement and potential in engineering.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white">Dare Mighty Things Hackathon – Grand Prize</h3>
                    <p className="text-sm text-gray-400">JLL, McDonald's HQ • 2019</p>
                    <p>Won both grand and category prize for Natural Language Processing-based real estate analysis solution.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white">Dean’s List Honors</h3>
                    <p className="text-sm text-gray-400">Florida International University • 2023–2025</p>
                    <p>Maintained strong academic performance throughout degree.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white">FIU Academy of Leaders</h3>
                    <p className="text-sm text-gray-400">Florida International University • 2024</p>
                    <p>Completed FIU’s 2-month leadership training intensive.</p>
                </div>
            </div>
        </section>
    );
};

export default Awards;
