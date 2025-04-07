import Head from 'next/head';

export default function Introduction() {
  return (
    <>
      <Head>
        <title>Faculty of Technology and Engineering</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Faculty of Technology and Engineering
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Established in June 1890 by Maharaja Sayajirao Gaekwad III, the Faculty of Technology and Engineering, originally known as the Kala Bhavan Technical Institute, has a rich history of advancing technical education. Initially, it operated from the Senapati Bhavan until 1892, when it moved to its current location in a majestic palatial building gifted by the Maharaja.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The building, designed in the Indo-Saracenic architectural style by architect A.H. Coyle, features an "E" shaped structure with semi-circular arches, pedimented windows adorned with murals, and pilasters, embodying classical architectural elements. This iconic structure stands as a testament to the blend of traditional and modern architectural designs.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            In 1949, with the establishment of The Maharaja Sayajirao University of Baroda, the institute was restructured and became the Faculty of Technology and Engineering. Today, it encompasses 14 diverse departments offering specializations in Engineering, Architecture, and Applied Sciences. The faculty continually updates its curricula to keep pace with modern technology, providing a range of programs from undergraduate to doctoral levels.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The faculty boasts a comprehensive library named after Prof. T.K. Gajjar, the first principal of KBTI. The library houses approximately 130,651 books and subscribes to 61 journals, serving the needs of over 2,700 registered readers in engineering and technology disciplines.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Throughout its history, the Faculty of Technology and Engineering has upheld a legacy of academic excellence and innovation, contributing significantly to technical education and research in India.
          </p>
        </div>
      </div>
    </>
  );
}
