 const HeavyLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul className="flex gap-5 ">
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
      {children}
    </>
  );
};
export default HeavyLayout;
