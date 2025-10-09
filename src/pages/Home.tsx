import { Link } from 'react-router-dom';
import { Home as HomeIcon, BookOpen, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <HomeIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Our Site
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple and elegant website built with React, Vite, Tailwind CSS, and React Router
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/about"
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-400"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 ml-4">About Us</h2>
            </div>
            <p className="text-gray-600">
              Learn more about our mission, vision, and the team behind this project.
            </p>
          </Link>

          <Link
            to="/contact"
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-400"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 ml-4">Contact</h2>
            </div>
            <p className="text-gray-600">
              Get in touch with us. We'd love to hear from you and answer any questions.
            </p>
          </Link>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Lightning Fast</h4>
              <p className="text-sm text-gray-600">Built with Vite for optimal performance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Modern Design</h4>
              <p className="text-sm text-gray-600">Styled with Tailwind CSS</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Responsive</h4>
              <p className="text-sm text-gray-600">Works perfectly on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
