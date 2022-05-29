import type { NextPage } from "next";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <Container fluid>
      <Row style={{ position: "relative" }}>
        <Col
          style={{
            height: "100vh",
            width: "50vw",
            position: "fixed",
            top: "10%",
            left: "5%",
          }}
        >
          <Stack gap={3}>
            <div className="about-header">Hello I am Klaudia</div>
            <div className="about-description">
              I live in Gdańsk (Poland), I am a logistics engineer by education
              but I have never worked in the profession. Since the beginning of
              2021 I have been learning to program. I am self-taught person
              which started with tutorials on youtube and udemy.
              <p className="italic">
                * From October 2021 I am a student of a postgraduate degree,
                Junior Web Developer.
              </p>
              <p className="italic">
                * From November 2021 to February 2021, I participated in Dare IT
                mentoring. Under the watchful eye of a wonderful mentor, I
                expanded my knowledge and skills.
              </p>
              <p className="italic">
                * In March 2022 I took part in a intership at ElPassion, which
                allowed me to learn not only how to code, but how to work as a
                coder (teamwork, git, tests, time estimates).
              </p>
              I am currently working as a Junior JavaScript Developer in the
              Polish startup Hintech. Privately, I am a mother of a dachshund, a
              fan of rock concerts, and a pole dance enthusiast.
            </div>

            <div className="about-description">My main teach stack:</div>
            <Container fluid>
              <Row>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
              </Row>
            </Container>
          </Stack>
        </Col>
        <Col
          style={{
            height: "100vh",
            position: "fixed",
            top: "15%",
            left: "65%",
          }}
        >
          <Image
            src="/img/me.png"
            height={"700%"}
            width={"500%"}
            alt="me"
          ></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
