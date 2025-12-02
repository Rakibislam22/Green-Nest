import React, { use } from "react";

const expertsPromise = fetch('/experts.json').then(res => res.json());

const PlantsExperts = () => {
  const experts = use(expertsPromise);
  return (
    <section className="pt-30" id="experts">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-semibold text-primary">
          Meet Our Green Experts
        </h2>
        <p className="text-secondary mt-3 text-lg max-w-2xl mx-auto">
          Our team of plant enthusiasts and horticulture specialists are here to
          help you grow and nurture your indoor garden.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 text-center"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-40 h-40 rounded-full mx-auto object-cover mb-4 border-4 border-green-100"
            />
            <h3 className="text-xl font-semibold text-primary">
              {expert.name}
            </h3>
            <p className="text-secondary mt-1">{expert.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantsExperts;
