import Head from 'next/head';

export default function TrainingPlacement() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Training & Placement | Your Institution Name</title>
        <meta name="description" content="Our comprehensive training and placement program" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6">
            CAREER ACCELERATION PROGRAM
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between academia and industry through cutting-edge training and seamless placement opportunities.
          </p>
        </section>

        {/* Program Highlights */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AI-Driven Career Mapping</h3>
              <p className="text-gray-600">
                Our proprietary algorithm analyzes your skills and interests to recommend optimal career paths in today's tech landscape.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Industry Immersion Program</h3>
              <p className="text-gray-600">
                Virtual and in-person internships with tech leaders using AR/VR for remote collaboration and hands-on experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart Placement Portal</h3>
              <p className="text-gray-600">
                Our automated matching system connects your profile with top employers using machine learning and NLP techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our 360° Placement Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 to-purple-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-4 md:mb-0">
                  1
                </div>
                <div className="md:ml-8 bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Skill Gap Analysis</h3>
                  <p className="text-gray-600">
                    Comprehensive assessment using our digital platform to identify technical and soft skill competencies.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4 md:mb-0">
                  2
                </div>
                <div className="md:ml-8 bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Customized Learning Path</h3>
                  <p className="text-gray-600">
                    Personalized curriculum with micro-courses, coding bootcamps, and AI-powered mentorship.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl mb-4 md:mb-0">
                  3
                </div>
                <div className="md:ml-8 bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Industry Readiness Program</h3>
                  <p className="text-gray-600">
                    Simulated work environments, hackathons, and live projects with partner companies.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl mb-4 md:mb-0">
                  4
                </div>
                <div className="md:ml-8 bg-white p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Smart Placement</h3>
                  <p className="text-gray-600">
                    Automated profile matching, virtual recruitment drives, and blockchain-verified credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Technology Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md w-40 h-20 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">AWS</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-40 h-20 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">Microsoft</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-40 h-20 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">Google Cloud</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-40 h-20 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">IBM</span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-indigo-700 text-white rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-indigo-100">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-indigo-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹12L</div>
              <div className="text-indigo-100">Highest Package</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Launch Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our next-gen training program and get placed in top tech companies worldwide.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all">
            Register Now
          </button>
        </section>
      </main>
    </div>
  );
}