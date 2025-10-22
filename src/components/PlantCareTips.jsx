import { FaSun, FaTint, FaWind, FaSeedling, FaCut, FaThermometerHalf } from "react-icons/fa";

const PlantCareTips = () => {
  return (
    <section className="pt-30 px-6 sm:px-12 text-center">

      <h2 className="text-4xl font-semibold text-primary mb-4">Plant Care Tips</h2>
      <p className="text-secondary max-w-2xl mx-auto mb-10">
        Keep your indoor plants healthy and thriving with these simple yet effective care tips. 
        A little love and consistency go a long way!
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaSun className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Provide Adequate Light</h3>
          <p className="text-secondary text-sm">
            Most indoor plants prefer bright, indirect sunlight. Place them near windows but avoid harsh direct rays.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaTint className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Water Wisely</h3>
          <p className="text-secondary text-sm">
            Overwatering is the most common mistake. Water only when the top inch of soil feels dry to the touch.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaWind className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Ensure Air Circulation</h3>
          <p className="text-secondary text-sm">
            Fresh air keeps plants healthy. Keep them in a space with good airflow but away from cold drafts.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaSeedling className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Use Quality Soil</h3>
          <p className="text-secondary text-sm">
            Use well-draining potting mix rich in nutrients. Re-pot your plants once a year for best results.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaThermometerHalf className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Maintain Proper Temperature</h3>
          <p className="text-secondary text-sm">
            Most houseplants prefer temperatures between 18–26°C. Keep them away from heaters or AC vents.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <FaCut className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Prune Regularly</h3>
          <p className="text-secondary text-sm">
            Trim yellow leaves or dead stems to promote new growth and keep your plant looking fresh and tidy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlantCareTips;
