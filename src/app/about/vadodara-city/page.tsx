import { FC } from 'react';

const AboutVadodara: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Vadodara</h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to Vadodara</h2>
        <p className="text-lg">
          Vadodara, also known as Baroda, is a vibrant city located in the western part of India, in the state of Gujarat. 
          Known for its rich history, cultural heritage, and beautiful landscapes, Vadodara is often referred to as the "Cultural Capital of Gujarat."
        </p>
      </section>

      {/* History Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">History</h2>
        <p className="text-lg">
          Vadodara has a history that dates back centuries, with early settlements dating back to the 6th century AD. The city was an important part of the Mauryan and Gupta empires and later became a prominent region under the Marathas. The Gaekwad dynasty played a significant role in the development of the city, especially during the British colonial period.
        </p>
      </section>

      {/* Landmarks Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Famous Landmarks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src="/laxshmi.jpg" // Replace with actual image path in the public directory
              alt="Lakshmi Vilas Palace"
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Lakshmi Vilas Palace</h3>
            <p className="text-lg">
              The Lakshmi Vilas Palace is an architectural marvel and one of the grandest palaces in India. It is the residence of the Gaekwad family and showcases beautiful Indo-Saracenic style architecture.
            </p>
          </div>

          <div>
            <img
              src="/sayaji-baug.jpg" // Replace with actual image path in the public directory
              alt="Sayaji Garden"
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Sayaji Garden</h3>
            <p className="text-lg">
              Sayaji Garden is a large public park in the heart of the city. The garden is home to the Baroda Museum and Picture Gallery, and it is a popular spot for both locals and tourists to relax and enjoy nature.
            </p>
          </div>
        </div>
      </section>

      {/* Culture and Festivals Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Culture and Festivals</h2>
        <p className="text-lg">
          Vadodara is known for its vibrant cultural scene. The city hosts various festivals throughout the year, including Navratri, Diwali, and the famous Garba celebrations. The city’s arts scene is thriving, with traditional dance, music, and crafts playing an essential role in daily life.
        </p>
      </section>

      {/* Economy and Industry Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Economy and Industry</h2>
        <p className="text-lg">
          Vadodara is an important industrial hub in Gujarat, known for its textile, chemical, and petrochemical industries. It is also home to several educational institutions, including engineering colleges, making it a center for research and development.
        </p>
      </section>

      {/* Conclusion Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
        <p className="text-lg">
          Vadodara is a city that beautifully blends its ancient traditions with modern development. Whether you're visiting for its rich history, beautiful landmarks, or vibrant culture, Vadodara offers a unique experience that continues to attract people from all walks of life.
        </p>
      </section>
    </div>
  );
};

export default AboutVadodara;
