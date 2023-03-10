import React from "react";
import "../siginup/siginup.css";
// import { auth } from "../../config/firebase";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import formimage from '../../img/rigisterimgae.jpg'

const Siginup = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [array, setNewArray] = useState([]);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    setNewArray([...array, data]);
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      console.log(result);
      toast.success(`welcome ${email}`);

      navigate("/login");
    } catch (err) {
      toast.error("somthing wrong");
    }
  };

  return (
    <div>
      <div className="container col-md-7 col-sm-12">
        <section className="signup_section">
          <div className="card m-5 col-sm-12 m-sm-0 section-signup">
          <h1 className="text-center m-3">Sign Up Form</h1>
            <div className="row g-0 d-flex align-items-start">
              <div className="col-md-5 section-signup-inner d-none d-lg-flex">
                <img
                  src={formimage}
                  alt="Trendy Pants and Shoes"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={onSubmit}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example1">
                        Email address :
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example2">
                        Password :
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        autoComplete="off"
                      />
                      <div className="col-auto mt-3">
                        <button type="submit" className="btn btn-primary mb-3">
                          Register
                        </button>
                      </div>
                    </div>
                    <div className="row mb-8">
                      <div className="col d-flex justify-content-center">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="form2Example31"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example31"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Siginup;
