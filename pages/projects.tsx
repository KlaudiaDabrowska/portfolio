import type { NextPage } from "next";
import Image from "next/image";
import { Container } from "react-bootstrap";

const Projects: NextPage = () => {
  return (
    <>
      <h1 className="mt-5 text-center fw-bold" style={{ fontSize: "5rem" }}>
        {" "}
        My projects{" "}
      </h1>
      <Container fluid className="pt-3">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body project-card">
                <h5 className="card-title text-center fw-bold fs-3 mb-5">
                  <a
                    href={"https://klaudiadabrowska.github.io/Coctail-Bar/"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Coctail Bar
                  </a>
                </h5>
                <p className="card-text text-center">
                  This project is simple search engine for alkoholic cocktails.
                  The project contains five buttons. Two (a picture of a drink
                  and a random button) are used to display a random cocktail.
                  After clicking, you can find information such as: ingredients,
                  recipe and a preview photo. The next buttons are: searching by
                  ingredients (e.g. vodka), by name (e.g. margarita), and the
                  entire list of available drinks (in this case only 100
                  elements - that`s what the API allows) Data is from free API
                </p>
                <div className="text-center">
                  <Image
                    src={"/img/coctailbar.png"}
                    height={600}
                    width={1000}
                    alt="coctailbar"
                  />
                </div>
                <p className="card-text text-center text-muted">
                  Tech stack: HTML5, SCSS, JavaScript, Webpack
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body project-card">
                <h5 className="card-title text-center fw-bold fs-3 mb-5">
                <a
                    href={"https://murmuring-dawn-23275.herokuapp.com/"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Fitness App
                  </a>
                </h5>
                <p className="card-text text-center">
                The application allows the user to create his own workout plan. The user can select exercises from the exercise list and can add the number of repetitions. Once he has made his workout plan, he can open it in modal and begin the adventure!
                <br></br><br></br><br></br><br></br>
                </p>
                <div className="text-center">
                  <Image
                    src={"/img/fitness.png"}
                    height={600}
                    width={1000}
                    alt="coctailbar"
                  />
                </div>
                <p className="card-text text-center text-muted">
                  Tech stack: Next.JS, Typescript, MUI 
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;
