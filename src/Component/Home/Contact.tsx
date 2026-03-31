import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#0d0d0d] pb-20 px-6 md:px-20">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Get In <span className="text-red-500">Touch</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base">
          Have a question? We'd love to hear from you.
        </p>
      </div>

      <form className="max-w-xl mx-auto flex flex-col gap-4">

        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#161616] border border-white/10 focus:border-red-500 text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-gray-600"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="bg-[#161616] border border-white/10 focus:border-red-500 text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-gray-600"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="bg-[#161616] border border-white/10 focus:border-red-500 text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-gray-600 resize-none"
        />

        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm py-3 rounded-lg transition-colors">
          Send Message
        </button>

      </form>

    </section>
  );
};

export default Contact;