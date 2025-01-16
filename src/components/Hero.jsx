const Hero = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <p className="text-2xl mb-4">Hi, I am</p>
          <h1 className="text-6xl font-bold mb-4">Tomasz Gajda</h1>
          <p className="text-xl text-gray-600 mb-8">Front-end Developer / UI Designer</p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              <img src="/github-icon.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              <img src="/email-icon.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="bg-black w-full h-full absolute -right-8 top-8 -z-10 rounded-3xl"></div>
          <img 
            src="/profile-image.png" 
            alt="Professional headshot" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero; 