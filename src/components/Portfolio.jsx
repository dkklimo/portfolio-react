const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-4xl font-bold mb-12">Portfolio</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Add your portfolio items here */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <img src="/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Project Title</h3>
            <p className="text-gray-600">Project description goes here</p>
          </div>
        </div>
        {/* Add more portfolio items */}
      </div>
    </section>
  );
};

export default Portfolio; 