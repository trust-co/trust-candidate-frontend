import Header from "./Header";
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="layoutGrid">
    <Header />
    <main className="body">{children}</main>
    <Footer />
  </div>
);

export default Layout;
