// import "./Navbar.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// export default function Navbar() {

//   return (
//     <nav className="main-nav">
//       <div className="logo-name">The Ace Algo.</div>
//       <div className="menu-links">
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/services">Services</a>
//           </li>
//           <li>
//             <a href="/marketplace">About Us</a>
//           </li>
//           <li>
//             <a href="/pricing">Pricing</a>
//           </li>
//           <li>
//             <a href="/contact">Contact Us</a>
//           </li>
//         </ul>
//       </div>
//       <div className="butn">
//         <a href="/contact">
//           {" "}
//           <button type="button" className="btn btn-outline-info">
//             Login
//           </button>
//         </a>
//       </div>
//       <div className="toggle-btn">
//         <i class="fa-solid fa-bars"></i>
//       </div>
//       <div className="dropdown_menu">
//       <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/services">Services</a>
//           </li>
//           <li>
//             <a href="/marketplace">About Us</a>
//           </li>
//           <li>
//             <a href="/pricing">Pricing</a>
//           </li>
//           <li>
//             <a href="/contact">Contact Us</a>
//           </li>
//           <div className="butn">
//         <a href="/contact">
//           {" "}
//           <button type="button" className="btn btn-outline-info">
//             Login
//           </button>
//         </a>
//       </div>
//       </div>
//     </nav>
//   );
// }

// seconds
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // useEffect to check screen width and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    // Check initial screen width
    handleResize();

    // Add event listener to check on resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="main-nav">
      <div className="logo-name">The Ace Algo.</div>
      <div className={`menu-links ${menuOpen ? "open" : ""}`}>
        <i className="fas fa-bars menu-icon" onClick={toggleMenu}></i>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/marketplace">About Us</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      {isMobile ? (
        <div
          className={`toggle-btn ${menuOpen ? "show" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      ) : (
        <div className="butn">
          <a href="/contact">
            {" "}
            <button type="button" className="btn btn-outline-info">
              Login
            </button>
          </a>
        </div>
      )}
      {isMobile && menuOpen && (
        <div className="dropdown_menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/marketplace">About Us</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
          {!menuOpen && (
            <div className="butn">
              <a href="/contact">
                {" "}
                <button type="button" className="btn btn-outline-info">
                  Login
                </button>
              </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
