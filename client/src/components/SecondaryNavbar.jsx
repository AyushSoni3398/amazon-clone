function SecondaryNavbar() {

  const menuItems = [
    "All",
    "Fresh",
    "MX Player",
    "Sell",
    "Bestsellers",
    "Today's Deals",
    "Prime",
    "Mobiles",
    "Customer Service",
    "Electronics",
  ];

  return (
    <div className="secondary-navbar">
      {menuItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default SecondaryNavbar;