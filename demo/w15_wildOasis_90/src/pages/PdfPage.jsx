import { Link } from 'react-router-dom';

const PdfPage = () => {
  return (
    <div className="wild-oasis">
      <div className="antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative">
        <header className="border-b border-primary-900 px-8 py-5">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link className="flex items-center gap-4 z-10" to="/">
              <img width="48px" height="36px" src="/logo.webp" />
              <span>The Wild Oasis (207410290)</span>
            </Link>
            <nav className="z-10 text-xl">
              <ul className="flex gap-16 items-center">
                <li>
                  <Link className="hover:text-accent-400 transition-colors" to="/cabins">
                    Cabins
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-accent-400 transition-colors" to="/about-pdf">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-accent-400 transition-colors" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-accent-400 transition-colors" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="flex-1 px-8 py-12 grid">
          <div className="pdf-container">
            <h1>About PDF</h1>
            <embed
              src="public/wp2-2N_90.pdf"  // 正確的路徑
              type="application/pdf"
              width="100%"
              height="800px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfPage;
