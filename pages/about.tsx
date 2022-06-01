import type { NextPage } from "next";
import { Container } from "react-bootstrap";
import Image from "next/image";

const About: NextPage = () => {
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
            <div className="card-body about-header">Hello I am Klaudia</div>
            <div
              className="card-title about-description"
              style={{ marginTop: "10%" }}
            >
              I live in Gdańsk (Poland), I am a logistics engineer by education
              but I have never worked in the profession. Since the beginning of
              2021 I have been learning to program. I am self-taught person
              which started with tutorials on youtube and udemy.
              <p className="italic card-text mt-4">
                * From October 2021 I am a student of a postgraduate degree,
                Junior Web Developer.
              </p>
              <p className="italic card-text">
                * From November 2021 to February 2021, I participated in Dare IT
                mentoring. Under the watchful eye of a wonderful mentor, I
                expanded my knowledge and skills.
              </p>
              <p className="italic card-text mb-4">
                * In March 2022 I took part in a intership at ElPassion, which
                allowed me to learn not only how to code, but how to work as a
                coder (teamwork, git, tests, time estimates).
              </p>
              Privately, I am a mother of a dachshund, a fan of rock concerts,
              and a pole dance enthusiast.
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

export default About;
