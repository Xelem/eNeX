import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      router.push("/transfer");
    }, 1000);
  };
  return (
    <div className="container py-4 bg-light">
      <div className="row justify-content-center my-5">
        <div className="col-lg-6 my-5 bg-white p-5 shadow">
          <h3 className="pb-2 fw-bold text-center">Login</h3>
          <form className="loginForm" onSubmit={submitHandler}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control mb-3"
              id="email"
              required
            />

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="password"
              required
            />
            <div className="text-end">
              <small className="mt-4">
                <Link href="">Forgot Password?</Link>
              </small>
            </div>

            <div className="text-center mt-4 px-5">
              <button type="submit" className="btn btn-secondary px-5 py-2">
                Log in
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Need an account? <Link href="/sign_up">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
