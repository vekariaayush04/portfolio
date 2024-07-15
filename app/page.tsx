import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between ">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold text-white">Ayush Vekaria</a>
            <div className="hidden sm:flex space-x-4">
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full text-white bg-gradient-to-b from-blue-500 to-blue-700">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ayush Vekaria</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">Full Stack Developer</p>
          <a href="#about" className="bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-700 rounded-full px-6 py-3 transition-colors duration-300 ease-in-out">Learn More</a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-gray-100 w-full text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg opacity-80 mb-8">
            Hi, I'm Ayush Vekaria. I am a passionate full stack developer with expertise in React, Node.js, and MongoDB.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 bg-white w-full text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example project */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2">Project Title</h3>
              <p className="text-gray-700 mb-4">Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-8 bg-gray-100 w-full text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
          <p className="text-lg opacity-80">
            JavaScript, TypeScript, React.js, Node.js, Express.js, MongoDB, HTML/CSS, Tailwind CSS
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-white w-full text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
          <p className="text-lg opacity-80 mb-8">
            Let's work together! You can reach me at ayush@example.com
          </p>
          {/* Add a contact form or additional contact information here */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white w-full py-4 text-center">
        <p>&copy; 2024 Ayush Vekaria. All rights reserved.</p>
      </footer>
    </main>
  );
}
