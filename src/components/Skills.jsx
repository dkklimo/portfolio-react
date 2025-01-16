const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>
      <div className="grid grid-cols-3 gap-8">
        {/* Add your skills here */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
          <ul className="space-y-2">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        {/* Add more skill categories */}
      </div>
    </section>
  );
};

export default Skills; 