// pages/principal.js
import { messages } from '@/data/messages';

export default function PrincipalPage() {
  const { name, title, image, message, signature, achievements } = messages.principal;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header with Back Button */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <a href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Leadership
          </a>
          <div className="text-sm text-gray-500">
            Official Message from {name}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-2/5 bg-gray-50 p-8 flex flex-col items-center justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={name}
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 text-center">{name}</h2>
              <p className="text-blue-600 text-lg text-center mb-6">{title}</p>
              
              <div className="w-full max-w-xs">
                <h3 className="font-semibold text-gray-900 mb-3">Key Achievements:</h3>
                <ul className="space-y-2">
                  {achievements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Message Section */}
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="prose max-w-none">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Message</h1>
                <div className="h-1 w-20 bg-blue-600 mb-8"></div>
                
                {message.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                {signature && (
                  <div className="mt-12">
                    <img src={signature} alt="Signature" className="h-16 mb-2" />
                    <p className="text-gray-900 font-semibold">{name}</p>
                    <p className="text-gray-600">{title}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}