const Layout = ({ children }:{ children: React.ReactNode}) => {
  return (
    <div>
      <p>Navbar of (root)</p>
      {children}
    </div>
  )
};
export default Layout;