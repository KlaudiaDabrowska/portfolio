import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isHoveringOne, setIsHoveringOne] = useState(false);
  const [isHoveringTwo, setIsHoveringTwo] = useState(false);
  const [isHoveringThree, setIsHoveringThree] = useState(false);

  const handleMouseOverOne = () => {
    setIsHoveringOne(true);
  };
  const handleMouseOverTwo = () => {
    setIsHoveringTwo(true);
  };
  const handleMouseOverThree = () => {
    setIsHoveringThree(true);
  };

  const handleMouseOutOne = () => {
    setIsHoveringOne(false);
  };
  const handleMouseOutTwo = () => {
    setIsHoveringTwo(false);
  };
  const handleMouseOutThree = () => {
    setIsHoveringThree(false);
  };

  return (
    <Container fluid>
      <Row style={{ position: "relative" }}>
        <Col
          style={{
            height: "100vh",
            position: "fixed",
            top: "25%",
            left: "20%",
          }}
        >
          <Stack gap={3}>
            <div
              onMouseOver={handleMouseOverOne}
              onMouseOut={handleMouseOutOne}
            >
              {isHoveringOne ? (
                <Link href={"/about"}>
                  <div className="welcome-text hello">About me </div>
                </Link>
              ) : (
                <div className="welcome-text hello">Hello.</div>
              )}
            </div>
            <div
              onMouseOver={handleMouseOverTwo}
              onMouseOut={handleMouseOutTwo}
            >
              {isHoveringTwo ? (
                <Link href={"/projects"}>
                  <div className="welcome-text">My projects </div>
                </Link>
              ) : (
                <div className="welcome-text">I am</div>
              )}
            </div>
            <div
              onMouseOver={handleMouseOverThree}
              onMouseOut={handleMouseOutThree}
            >
              {isHoveringThree ? (
                <Link href={"/contact"}>
                  <div className="welcome-text">Contact me</div>
                </Link>
              ) : (
                <div className="welcome-text">Klaudia</div>
              )}
            </div>
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

export default Home;
