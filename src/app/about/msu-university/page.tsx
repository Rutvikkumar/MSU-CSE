import Head from 'next/head';

export default function MSUIntroduction() {
  return (
    <>
      <Head>
        <title>Maharaja Sayajirao University of Baroda</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Maharaja Sayajirao University of Baroda
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Established in 1881 as the Baroda College of Science, the institution evolved into the Maharaja Sayajirao University of Baroda (MSU) on April 30, 1949. Named after its benefactor, Maharaja Sayajirao Gaekwad III, MSU stands as a premier institution of higher learning in India.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The university's main building, housing the Faculty of Arts, showcases Indo-Saracenic architecture designed by Robert Fellowes Chisholm. Its distinctive dome, inspired by the Gol Gumbaz of Bijapur, is a notable landmark in Vadodara. 
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Spanning 275 acres, MSU comprises 14 faculties, 111 departments, and offers a wide array of undergraduate, postgraduate, and doctoral programs. With an enrollment exceeding 35,000 students, it is the only university in Gujarat that uses English as the medium of instruction. 
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The university is renowned for its Faculty of Fine Arts, established in 1950, which has significantly contributed to the field of art education in India. :contentReference[oaicite:8]
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            MSU continues to uphold a legacy of academic excellence and cultural heritage, making it a distinguished center for education and research in India.
          </p>
        </div>
      </div>
    </>
  );
}
