import Header from "./Header";
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children, playerStats }) => (
  <div className="layoutGrid">
    <Header playerStats={playerStats} />
    <main className="body">{children}</main>
    <Footer />
  </div>
);

export default Layout;
