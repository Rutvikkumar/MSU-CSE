import Head from 'next/head';
import Image from 'next/image';

const AboutVadodara = () => {
  return (
    <>
      <Head>
        <title>About Vadodara | Cultural Capital of Gujarat</title>
        <meta name="description" content="Discover Vadodara's rich history, cultural heritage, landmarks, and modern development as Gujarat's premier cultural destination" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative h-96 w-full">
          <Image
            src="/collage/vadodara-skyline.webp"
            alt="Vadodara Skyline"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Vadodara</h1>
            <p className="text-xl text-teal-200">The Cultural Capital of Gujarat</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Introduction Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-100 pb-4">
              Introduction to Vadodara
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Vadodara, historically known as Baroda, is Gujarat's third-largest city and one of India's most culturally vibrant urban centers. Nestled along the Vishwamitri River, this 2,000-year-old city seamlessly blends its royal heritage with modern urban development.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 text-center">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal-700">2.2M+</p>
                  <p className="text-sm">Population</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal-700">2K+</p>
                  <p className="text-sm">Years of History</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal-700">149</p>
                  <p className="text-sm">Km² Area</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal-700">23°C</p>
                  <p className="text-sm">Avg. Temperature</p>
                </div>
              </div>
            </div>
          </section>

          {/* History Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-100 pb-4">
              Historical Legacy
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <Image
                  src="/collage/histrorical-vadodara.jpg"
                  alt="Historical Vadodara"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1 prose prose-lg text-gray-700">
                <p>
                  Vadodara's history spans over 2,000 years, with archaeological evidence dating back to the 6th century AD. The city flourished under:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>The Mauryan and Gupta empires (3rd century BCE - 6th century CE)</li>
                  <li>The Chalukya dynasty (6th-8th centuries)</li>
                  <li>The Solanki Rajputs (10th-13th centuries)</li>
                  <li>The Gaekwad dynasty (1721-1947)</li>
                </ul>
                <p>
                  The Gaekwad era, particularly under Maharaja Sayajirao III (1875-1939), transformed Vadodara into a modern, planned city with institutions, infrastructure, and cultural landmarks.
                </p>
              </div>
            </div>
          </section>

          {/* Landmarks Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-100 pb-4">
              Iconic Landmarks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/laxshmi.jpg"
                  alt="Lakshmi Vilas Palace"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Lakshmi Vilas Palace</h3>
                  <p className="text-gray-700">
                    Built in 1890, this magnificent palace spans 700 acres and is four times the size of Buckingham Palace. Its Indo-Saracenic architecture features Venetian mosaics, Belgian stained glass, and intricate Mughal-inspired designs.
                  </p>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/sayaji-baug.jpg"
                  alt="Sayaji Baug"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sayaji Baug</h3>
                  <p className="text-gray-700">
                    This 113-acre garden complex houses the Baroda Museum (built 1894), Picture Gallery, and a planetarium. The museum's collection includes Mughal miniatures, Tibetan art, and Egyptian mummies.
                  </p>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/collage/emma.webp"
                  alt="EME Temple"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">EME Temple (Dakshinamurty Temple)</h3>
                  <p className="text-gray-700">
                    This unique aluminum-clad temple dedicated to Lord Shiva was built by the Indian Army's Corps of Electronics and Mechanical Engineers in 1966, showcasing modernist religious architecture.
                  </p>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/collage/nazarbang.jpg"
                  alt="Nazarbaug Palace"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Nazarbaug Palace</h3>
                  <p className="text-gray-700">
                    The former royal treasury built in 1721, this palace complex now houses the Faculty of Performing Arts of MSU Baroda and contains exquisite examples of Gaekwad-era architecture.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Culture Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-100 pb-4">
              Vibrant Culture & Festivals
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Vadodara's cultural scene thrives through its festivals, performing arts, and culinary traditions:
              </p>
              
              <div className="bg-teal-50 rounded-lg p-6 my-6 border-l-4 border-teal-500">
                <h4 className="text-xl font-bold text-teal-800 mb-3">Major Festivals</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-teal-700">Navratri & Garba</h5>
                    <p>Vadodara hosts some of Gujarat's most spectacular 9-night dance festivals with over 50,000 participants daily.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-teal-700">Uttarayan</h5>
                    <p>The January kite festival transforms the sky into a colorful canvas with international kite competitions.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-teal-700">Vadfest</h5>
                    <p>Annual cultural festival celebrating Vadodara's artistic heritage through music, dance, and theater.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 my-8">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Performing Arts</h4>
                  <p>
                    The city is home to India's first Faculty of Performing Arts (established 1886) and maintains strong traditions in:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Classical Indian music (both Hindustani and Carnatic)</li>
                    <li>Kathak and Bharatnatyam dance forms</li>
                    <li>Modern theater at the historic Sursagar Natak Gruh</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Cuisine</h4>
                  <p>
                    Vadodara's food culture reflects its royal heritage and Gujarati roots:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Gaekwadi cuisine with its elaborate meat dishes</li>
                    <li>Street food like Sev Usal and Dabeli</li>
                    <li>Traditional Gujarati thalis at heritage restaurants</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Economy & Education Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-100 pb-4">
              Economy & Education Hub
            </h2>
            <div className="prose prose-lg text-gray-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Industrial Growth</h3>
                  <p>
                    Vadodara is Gujarat's second-largest industrial hub with:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>₹1.2 trillion GDP (2023 estimate)</li>
                    <li>Major petrochemical complexes (IPCL, GACL, GSPC)</li>
                    <li>Pharmaceutical and engineering industries</li>
                    <li>India's first industrial park (Makarpura GIDC, 1965)</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Educational Excellence</h3>
                  <p>
                    The city hosts premier educational institutions:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Maharaja Sayajirao University (established 1949)</li>
                    <li>Indian Institute of Information Technology (IIIT-V)</li>
                    <li>Central University of Gujarat</li>
                    <li>20+ engineering and 15+ pharmacy colleges</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 my-8 border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-blue-800 mb-3">Connectivity</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-700">By Air</h5>
                    <p>Vadodara Airport (BDQ) with daily flights to major Indian cities</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700">By Rail</h5>
                    <p>Major junction on Western Railway with 150+ daily trains</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700">By Road</h5>
                    <p>Connected via NH48 (Mumbai-Delhi) and NE1 (Expressway)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-100 pb-4">
              The Baroda Experience
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Vadodara offers a unique blend of royal grandeur and contemporary energy. From exploring the Gaekwad legacy at its palaces to experiencing the vibrant Garba nights, from indulging in diverse culinary traditions to witnessing cutting-edge industrial growth - the city presents multiple dimensions that continue to enchant residents and visitors alike.
              </p>
              <blockquote className="border-l-4 border-teal-500 italic my-6 pl-6 text-gray-600">
                "Vadodara is where tradition and progress dance together under the same sky - a city that remembers its past while confidently stepping into the future."
              </blockquote>
              <p className="font-medium">
                Whether you're a history enthusiast, culture lover, business traveler, or student, Vadodara welcomes you with the famous Gujarati warmth and its distinctive Sanskar (values) and Sanskruti (culture).
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutVadodara;