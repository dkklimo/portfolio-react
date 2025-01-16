const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">TG</div>
        <div className="flex gap-8">
          <a href="#about" className="hover:text-gray-600">About me</a>
          <a href="#skills" className="hover:text-gray-600">Skills</a>
          <a href="#portfolio" className="hover:text-gray-600">Portfolio</a>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
            CONTACT ME
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 