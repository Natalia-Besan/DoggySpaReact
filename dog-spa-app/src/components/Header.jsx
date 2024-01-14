import "../App.css";


export const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="logo">
          <img src= '../images/logo.svg' alt="logo" />
          <div className="tangerine">Luxe Animal Spa</div>
        </div>
        <nav className="Header">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Spa Services</li>
            <li>Book Appointment</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
