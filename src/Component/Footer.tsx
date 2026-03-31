

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 py-6 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">

        <h2 className="text-white text-xl font-bold tracking-widest">
          DRIVE<span className="text-red-500">Z</span>
        </h2>

        <p className="text-gray-600 text-sm">© 2026 DriveZ. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;