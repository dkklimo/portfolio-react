const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border rounded-lg"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 