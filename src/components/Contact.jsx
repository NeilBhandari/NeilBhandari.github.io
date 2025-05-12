import React, { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        const form = e.target;
        const data = new FormData(form);

        try {
            const res = await fetch('https://formspree.io/f/mldbpovv', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: data,
            });

            if (res.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form error:", error);
            alert("There was a problem submitting your form.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="max-w-4xl mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">Reach out via the form below and I’ll reply directly to your message.</p>

            {submitted ? (
                <p className="text-teal-400 text-lg font-medium">Thanks! I’ll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white h-32"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={sending}
                        className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-2 rounded"
                    >
                        {sending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </section>
    );
};

export default Contact;
