import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

function CustomInput({ id, ...props }: Props) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="input-group">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="input-group">
                <span>Number Phone</span>
                <input
                  type="text"
                  placeholder="Number Phone"
                  className="input input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomInput;
