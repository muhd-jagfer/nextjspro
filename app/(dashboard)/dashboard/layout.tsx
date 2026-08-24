const Layout = ({ children }:{ children: React.ReactNode}) => {
  return (
    <div>
      <p>Dashboard navibar</p>
      {children}
    </div>
  )
};
export default Layout;