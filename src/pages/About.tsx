import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 mb-12">
            We're passionate about creating exceptional web experiences using modern technologies.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This project showcases the power of modern web development tools and frameworks.
              Built with React for dynamic user interfaces, Vite for blazing-fast development,
              Tailwind CSS for beautiful styling, and React Router for seamless navigation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in creating web applications that are not only functional but also
              delightful to use, with clean design and smooth interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">
                Building together with developers worldwide
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
              <p className="text-gray-600">
                Deliver excellence in every line of code
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing cutting-edge technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
