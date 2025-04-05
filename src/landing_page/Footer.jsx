import React from "react";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgb(250,250,250)", marginBottom: "1rem" }}
    >
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="assets/images/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2025, Zerodha Pvt Ltd.
              <br />
              All rights reserved.
            </p>
            <div>
              <p><b>Connect with 🤍 <i>Paresh</i></b></p>
              <a
                href="https://x.com/pareshpatil_11"
                style={{ marginRight: "20px", color: "#000", fontSize: "20px" }}
                className="text-muted"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/paresh_.11/"
                style={{ marginRight: "20px", color: "#000", fontSize: "20px" }}
                className="text-muted"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pareshpatil11/"
                style={{ marginRight: "20px", color: "#000", fontSize: "20px" }}
                className="text-muted"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <p>Company</p>
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              About
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Products
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Pricing
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Referral programme
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Careers
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Zerodha.tech
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Press & media
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Zerodha Cares (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Contact us
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Support portal
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Z-Connect blog
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              List of charges
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Downloads & resources
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Videos
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              How to file a complaint?
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Status of your complaints
            </a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Open an account
            </a>
            <br />
            <a
              href=""
              style={{ textDecoration: "none", color: "#000" }}
              className="text-muted"
            >
              Fund transfer
            </a>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
