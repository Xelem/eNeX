import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter;
  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      router.push("/transfer");
    }, 1000);
  };

  return (
    <section id="signup">
      <div className="container py-4 bg-light">
        <div className="row justify-content-center my-5">
          <div className="col-lg-6 my-5 bg-white p-5 shadow">
            <h3 className="pb-2 fw-bold text-center">Sign Up</h3>
            <form onSubmit={submitHandler}>
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control mb-3 mb-3"
                id="name"
                required
              />

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

              <label htmlFor="password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="confirmPassword"
                required
              />
              <div className="text-center mt-4 px-5">
                <button type="submit" className="btn btn-secondary px-5 py-2">
                  Sign up
                </button>
              </div>
            </form>
            <p className="text-center mt-4">
              Already have an account? <Link href="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
