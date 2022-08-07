import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <div className="navbar navbar-expand-lg fixed-top navbar-light bg-primary border-bottom border-3 border-primary justify-content-center">
        <h1 className="navbar-brand fs-4 fw-bold mx-5 mt-2 text-white">
          <Link href="/">
            <a className="text-white text-decoration-none">eNeX</a>
          </Link>
        </h1>
      </div>
      {children}
      <footer className="bg-primary">
        <div className="container py-4">
          <div className="text-center ">
            <code className="text-white">Xel_Em Designs &copy; 2022</code>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
