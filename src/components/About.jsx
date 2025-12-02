import React from "react";

const About = () => {
    return (
        <section className="max-w-7xl mx-auto px-3 py-20 text-gray-700">

            {/* HEADER */}
            <h1 className="text-4xl sm:text-5xl font-bold text-primary text-center mb-10">
                About Green Nest
            </h1>

            {/* MAIN CARD */}
            <div className="bg-white shadow-md rounded-2xl p-10 space-y-10">

                {/* SECTION: Our Story */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-primary">Our Story</h2>
                    <p className="leading-relaxed text-gray-600  text-justify">
                        Green Nest was born out of a love for nature and the simple joy plants bring
                        into every home. What started as a small passion project quickly blossomed
                        into a thriving community of plant lovers. Today, we are dedicated to helping
                        people discover indoor greenery that fits their lifestyle, space, and mood.
                    </p>
                </div>

                {/* SECTION: Our Mission */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-primary">Our Mission</h2>
                    <p className="leading-relaxed text-gray-600 text-justify">
                        Our mission is to make plant care accessible, enjoyable, and sustainable.
                        Whether you're a beginner or a seasoned plant parent, Green Nest offers
                        curated plant selections, expert guidance, and eco-friendly decor ideas
                        to help you build your own peaceful indoor jungle.
                    </p>
                </div>

                {/* SECTION: Why Choose Us */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-primary">Why Choose Us?</h2>

                    <ul className="list-disc ml-6 text-gray-600 space-y-2">
                        <li>
                            🌿 <strong>Handpicked Indoor Plants:</strong> Only the healthiest, most vibrant plants make it to our store.
                        </li>
                        <li>
                            🌱 <strong>Expert Advice:</strong> From care tips to decor inspiration, our specialists are here to help.
                        </li>
                        <li>
                            🌎 <strong>Eco-Friendly Approach:</strong> We promote natural living and sustainable plant decor.
                        </li>
                        <li>
                            🛒 <strong>Easy Shopping Experience:</strong> Simple navigation, quality photos, and honest details.
                        </li>
                        <li>
                            🤝 <strong>Community First:</strong> We believe plant lovers grow better together.
                        </li>
                    </ul>
                </div>

                {/* SECTION: Our Vision */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-primary">Our Vision</h2>
                    <p className="leading-relaxed text-gray-600 text-justify">
                        We dream of a world where every home feels alive with greenery.
                        Green Nest aims to inspire mindful living and healthier indoor environments
                        through the beauty and natural benefits of plants.
                    </p>
                </div>

                {/* IMAGE + INFO */}
                <div className="flex flex-col lg:flex-row items-center gap-10 pt-5">
                    <img
                        src="https://i.ibb.co.com/cS6wLCcj/img9.png"
                        alt="Green Nest Plants"
                        className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                    />

                    <div className="flex-1 space-y-3">
                        <h3 className="text-2xl font-semibold text-primary">A Community That Grows Together</h3>
                        <p className="leading-relaxed text-gray-600 text-justify">
                            At Green Nest, we are more than just a brand — we are a movement.
                            Every plant you buy supports our ongoing mission to educate, inspire,
                            and build a greener, more mindful way of living.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
