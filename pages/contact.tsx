import type { NextPage } from "next";
import { Container } from "react-bootstrap";
import Image from "next/image";

const Contact: NextPage = () => {
  return (
    <Container fluid>
      <div
        className="card mb-3"
        style={{
          backgroundColor: "transparent",
          border: "none",
          marginTop: "6rem",
        }}
      >
        <div className="row g-0">
          <div className="col-md-7 text-center">
            <div className="card-body about-header">
              If you want to contact me:
            </div>
            <div
              className="card-title about-description"
              style={{ marginTop: "10%" }}
            >
              <div className="d-flex align-items-center mb-5">
                <Image
                  src={"/img/linkedin1.png"}
                  height={60}
                  width={60}
                  alt={"linkedin"}
                />
                <span className="italic card-text">
                  <a
                    href={
                      "https://www.linkedin.com/in/klaudia-dabrowska-8ab02219b/"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    Linkedin
                  </a>
                </span>
              </div>
              <div className="d-flex align-items-center mx-2">
                <Image
                  src={"/img/email2.png"}
                  height={50}
                  width={50}
                  alt={"email"}
                />
                <span className="italic card-text">
                  dabrowskaa.klaudia@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <Image
                src="/img/me.png"
                height={"700%"}
                width={"500%"}
                alt="me"
                className="img-fluid rounded-start"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
