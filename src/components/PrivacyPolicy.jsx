import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="max-w-7xl mx-auto px-3 py-20 text-gray-700">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary text-center mb-10">
                Privacy Policy
            </h1>

            <div className="bg-white shadow-md rounded-xl p-8 space-y-8 leading-relaxed">

                {/* INTRODUCTION */}
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">Introduction</h2>
                    <p className="text-justify">
                        Welcome to <strong>Green Nest</strong>. We value your trust, and your privacy is
                        extremely important to us. This Privacy Policy outlines how we responsibly
                        collect, handle, use, and protect the information you share with us when you
                        explore our website, purchase plants, interact with our features, or seek
                        guidance from our plant experts.
                    </p>
                    <p className="leading-relaxed text-gray-600 mt-3 text-justify">
                        At Green Nest, we believe in transparency. We want you to clearly understand
                        what data we collect, why we collect it, and how it benefits your experience.
                        Our goal is to create a safe, personalized, and seamless environment for every
                        plant enthusiast — whether you're browsing, learning, or shopping for indoor
                        greenery.
                    </p>

                    <p className="leading-relaxed text-gray-600 mt-3 text-justify">
                        By using our services, you agree to the practices described in this Privacy
                        Policy. We encourage you to read it carefully to understand your rights and
                        how your information is safeguarded under our care.
                    </p>
                </div>

                {/* DATA WE COLLECT */}
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">Information We Collect</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li><strong>Personal Information:</strong> Name, email address, and contact details.</li>
                        <li><strong>Usage Data:</strong> Pages visited, time spent, device info, browser type.</li>
                        <li><strong>Plant Preferences:</strong> Favorites, ratings, interactions with plant items.</li>
                        <li><strong>Cookies:</strong> For personalization and improving browsing experience.</li>
                    </ul>
                </div>

                {/* HOW WE USE DATA */}
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">How We Use Your Information</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>To improve plant recommendations and user experience.</li>
                        <li>To personalize your homepage and browsing behavior.</li>
                        <li>To provide customer support and answer inquiries.</li>
                        <li>To analyze performance and improve site features.</li>
                        <li>To send updates, promotions, or important notifications.</li>
                    </ul>
                </div>

                {/* SHARE DATA */}
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">Sharing Your Information</h2>
                    <p>
                        We do <strong>not sell</strong> your personal information. We only share your data with:
                    </p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Trusted third-party services (analytics, hosting, payment processors).</li>
                        <li>Legal authorities, only if required by law.</li>
                    </ul>
                </div>

                {/* SECURITY */}
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">Data Security</h2>
                    <p>
                        We use modern security practices to safeguard your information, including data encryption,
                        secure servers, and access controls. However, no system is 100% secure, and we encourage
                        you to use strong passwords and protect your personal devices.
                    </p>
                </div>

                {/* COOKIES */}
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">Cookies & Tracking</h2>
                    <p>
                        Cookies help us improve your experience by remembering your preferences and showing
                        relevant plant recommendations. You may disable cookies in your browser settings,
                        but some features may not work properly.
                    </p>
                </div>

                {/* CHILDREN */}
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">Children’s Privacy</h2>
                    <p>
                        Green Nest does not knowingly collect data from anyone under the age of 13. If you believe
                        a child has provided us personal information, please contact us immediately.
                    </p>
                </div>

                {/* CHANGES */}
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted here with
                        an updated “Last Updated” date.
                    </p>
                </div>

                {/* CONTACT */}
                <div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">Contact Us</h2>
                    <p>
                        If you have questions regarding this Privacy Policy, you can contact us at:
                        <br />
                        <span className="font-semibold text-primary">support@greennest.com</span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default PrivacyPolicy;
