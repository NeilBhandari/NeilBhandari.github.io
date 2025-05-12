import React from 'react';
import featuredImg from '../assets/featured.jpeg';
import article1Img from '../assets/peace.jpeg';
import article2Img from '../assets/funding.jpeg';

const Articles = () => {
    const articles = [
        {
            title: 'An Insider’s Look at the Illinois Institute of Technology',
            summary: 'Featured article exploring my perspective and academic journey at IIT.',
            url: 'https://www.braingainmag.com/an-insiders-look-at-the-illinois-institute-of-technology.htm',
            image: featuredImg
        },
        {
            title: '“For Peace, Together” – Highlighting Cultural and Religious Unity at FIU',
            summary: 'Article I wrote covering FIU’s unity event for PantherNOW.',
            url: 'https://panthernow.com/2024/11/23/for-peace-together-event-seeks-cultural-and-religious-unity/',
            image: article1Img
        },
        {
            title: 'Clubs Struggle to Procure Funding as RSO is Understaffed',
            summary: 'My investigative write-up on club funding issues at FIU.',
            url: 'https://panthernow.com/2024/12/12/clubs-struggle-to-procure-funding-as-rso-is-understaffed/',
            image: article2Img
        }
    ];

    return (
        <section id="articles" className="max-w-5xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">Articles</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                    <div key={index} className="bg-gray-800 rounded shadow-md overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                            <p className="text-gray-300 mb-3">{article.summary}</p>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-400 hover:underline"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Articles;
