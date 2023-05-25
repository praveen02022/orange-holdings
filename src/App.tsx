import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import HeaderNav from "./header";
function App() {
  return (
    <div>
      <section>
        <HeaderNav />
      </section>
      <div>
        <Container>
          <section>
            <Row style={{ marginTop: "10%" }}>
              <Col md={5}>
                <h1
                  style={{
                    color: "#22205F",
                    fontWeight: "600",
                    fontSize: "56px",
                    lineHeight: "1.1em",
                  }}
                >
                  The Global Commerce Platform For You
                </h1>
                <p
                  style={{ color: "#555", fontSize: "26px", marginTop: "30px" }}
                >
                  Building your business is now made easy with Singlebag!
                </p>
                <Button
                  variant="primary"
                  className=""
                  style={{
                    marginBottom: "10px",
                    background: "#22205F",
                    color: "white",
                    border: "none",
                  }}
                  size="sm"
                >
                  Start Your Free Trail
                </Button>
                <p
                  style={{
                    color: "#555",
                    fontSize: "18px",
                    marginTop: "25px",
                    marginLeft: "10px",
                  }}
                >
                  Try Singlebag free for 14 days, no credit card required. Start
                  your online store without any coding knowledge.
                </p>
              </Col>
              <Col>
                <img src="img1.png" alt="" />
              </Col>
            </Row>
          </section>
          <section>
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  color: "#22205F",
                  fontWeight: "600",
                  fontSize: "36px",
                  lineHeight: "1.1em",
                }}
              >
                Singlebag, The Best Ecommerce Platform for Best Results
              </h1>
              <p style={{ color: "#555", fontSize: "16px", marginTop: "10px" }}>
                We provide a cutting-edge platform for every business. Singlebag
                offers you the best tools to build an online store through which
                your products will reach diverse customers, be it Cafes,
                Electronics, Flowers, Fast food, Furniture, Books, or any other
                product.
              </p>
            </div>
          </section>
          <section>
            <h3
              style={{
                color: "#22205F",
                fontWeight: "600",
                fontSize: "26px",
              }}
            >
              What do we offer?
            </h3>
            <div style={{ display: "flex" }}>
              <Card style={{ width: "24rem" }}>
                <Card.Img
                  variant="top"
                  src="hosting.png"
                  className="m-3"
                  style={{ width: "50px" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Start an online business
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    Build your online store in a few easy steps. No coding
                    knowledge is required, just your idea and passion!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "24rem", marginLeft: "30px" }}>
                <Card.Img
                  variant="top"
                  src="wholesale.png"
                  className="m-3"
                  style={{ width: "50px" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Start an online business
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    Build your online store in a few easy steps. No coding
                    knowledge is required, just your idea and passion!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "24rem", marginLeft: "30px" }}>
                <Card.Img
                  variant="top"
                  src="online-shopping1.png"
                  className="m-3"
                  style={{ width: "50px" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Start an online business
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    Build your online store in a few easy steps. No coding
                    knowledge is required, just your idea and passion!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div style={{ display: "flex", marginTop: "30px" }}>
              <Card style={{ width: "37rem", marginRight: "30px" }}>
                <Card.Img
                  variant="top"
                  src="hosting.png"
                  className="m-3"
                  style={{ width: "50px" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Start an online business
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    Build your online store in a few easy steps. No coding
                    knowledge is required, just your idea and passion!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "37rem" }}>
                <Card.Img
                  variant="top"
                  src="hosting.png"
                  className="m-3"
                  style={{ width: "50px" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Start an online business
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    Build your online store in a few easy steps. No coding
                    knowledge is required, just your idea and passion!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </section>
          <section>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#555",
                  fontSize: "16px",
                  marginTop: "20px",
                  marginBottom: "0px",
                }}
              >
                Create an online store with no coding knowledge
              </p>
              <h1
                style={{
                  color: "#22205F",
                  fontWeight: "600",
                  fontSize: "36px",
                }}
              >
                Ecommerce stores are now the powerhouse of building engaging
                business.
              </h1>
            </div>
          </section>
          <section style={{ marginTop: "30px" }}>
            <Row>
              <Col>
                <img src="Singlebag-store.png" alt="" />
              </Col>
              <Col>
                <div style={{ marginTop: "50px" }}>
                  <h1
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "26px",
                    }}
                  >
                    Online Store for Every Business
                  </h1>
                  <p
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "30px",
                    }}
                  >
                    Sell anything and everything online by building an online
                    store. The best deal is that you could sell everywhere, all
                    around the globe. With a myriad of options for your
                    storefront designs and abundant options for extensions,
                    start your ecommerce store in a few simple steps and start
                    selling with Singlebag.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
          <section style={{ marginTop: "30px" }}>
            <Row>
              <Col md={4}>
                <div>
                  <h1
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "26px",
                    }}
                  >
                    Online Store for Every Business
                  </h1>
                  <p
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "30px",
                    }}
                  >
                    Sell anything and everything online by building an online
                    store. The best deal is that you could sell everywhere, all
                    around the globe. With a myriad of options for your
                    storefront designs and abundant options for extensions,
                    start your ecommerce store in a few simple steps and start
                    selling with Singlebag.
                  </p>
                </div>
              </Col>
              <Col>
                <img src="Grow-your-Online-business.jpg" alt="" />
              </Col>
            </Row>
          </section>
          <section style={{ marginTop: "30px" }}>
            <Row>
              <Col>
                <img src="Your-business-Your-Delivery-Agent.jpg" alt="" />
              </Col>
              <Col>
                <div style={{ marginTop: "50px" }}>
                  <h1
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "26px",
                    }}
                  >
                    Online Store for Every Business
                  </h1>
                  <p
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "30px",
                    }}
                  >
                    Sell anything and everything online by building an online
                    store. The best deal is that you could sell everywhere, all
                    around the globe. With a myriad of options for your
                    storefront designs and abundant options for extensions,
                    start your ecommerce store in a few simple steps and start
                    selling with Singlebag.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
          <section style={{ marginTop: "30px" }}>
            <Row>
              <Col>
                <div style={{ marginTop: "50px" }}>
                  <h1
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "26px",
                    }}
                  >
                    Online Store for Every Business
                  </h1>
                  <p
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "30px",
                    }}
                  >
                    Sell anything and everything online by building an online
                    store. The best deal is that you could sell everywhere, all
                    around the globe. With a myriad of options for your
                    storefront designs and abundant options for extensions,
                    start your ecommerce store in a few simple steps and start
                    selling with Singlebag.
                  </p>
                </div>
              </Col>
              <Col>
                <img src="img1.png" alt="" />
              </Col>
            </Row>
          </section>{" "}
          <section style={{ marginTop: "30px" }}>
            <Row>
              <Col>
                <img src="Flexible-Point-Of-Sale.jpg" alt="" />
              </Col>
              <Col>
                <div style={{ marginTop: "50px" }}>
                  <h1
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "26px",
                    }}
                  >
                    Online Store for Every Business
                  </h1>
                  <p
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "30px",
                    }}
                  >
                    Sell anything and everything online by building an online
                    store. The best deal is that you could sell everywhere, all
                    around the globe. With a myriad of options for your
                    storefront designs and abundant options for extensions,
                    start your ecommerce store in a few simple steps and start
                    selling with Singlebag.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
          <section style={{ marginTop: "30px" }}>
            <Row>
              <Col>
                <div style={{ marginTop: "50px" }}>
                  <h1
                    style={{
                      color: "#22205F",
                      fontWeight: "600",
                      fontSize: "26px",
                    }}
                  >
                    Online Store for Every Business
                  </h1>
                  <p
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      marginTop: "30px",
                    }}
                  >
                    Sell anything and everything online by building an online
                    store. The best deal is that you could sell everywhere, all
                    around the globe. With a myriad of options for your
                    storefront designs and abundant options for extensions,
                    start your ecommerce store in a few simple steps and start
                    selling with Singlebag.
                  </p>
                </div>
              </Col>
              <Col>
                <img src="Singlebag-Manage-Everything.png" alt="" />
              </Col>
            </Row>
          </section>
        </Container>
        <section className="mt-4">
          <div
            style={{
              textAlign: "center",
              display: "block",
              background: "#0072BB",
              padding: "20px",
            }}
          >
            <h3 style={{ color: "#FFF", fontSize: "16px", marginTop: "70px" }}>
              THE BEST WAY TO MAKE MONEY ONLINE IS TO START YOUR ONLINE STORE
            </h3>
            <h1 style={{ color: "#FFF", fontSize: "36px" }}>
              Your business dream is coming true
            </h1>
            <p style={{ color: "#FFF", fontSize: "18px" }}>
              Start your journey. Start with Singlebag. Start now.
            </p>
            <Button
              variant="primary"
              className=""
              style={{
                marginRight: "10px",
                background: "#22205F",
                color: "white",
                border: "none",
              }}
              size="lg"
            >
              Start Your Free Trail
            </Button>
          </div>
        </section>
        <Container>
          <section>
            <Row>
              <Col md={4}>
                <img src="logo.png" style={{ width: "180px " }} alt="test" />
                <div>
                  <p>
                    Singlebag is an efficient and user-friendly eCommerce
                    platform that provides you with all advanced facilities and
                    powerful tools to start your online store without any coding
                    knowledge. Whether you are a start-up or an established
                    business, Singlebag is an all-in-one e-commerce platform
                    that helps to stabilize and accelerate your online business.
                  </p>
                </div>
              </Col>
              <Col className="mt-4">
                <h3
                  style={{
                    color: "#22205F",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  COMMUNITY
                </h3>
                <p   style={{ color: "#555", fontSize: "16px", marginTop: "10px",marginBottom:"0px" }}>Forums</p>
                <p   style={{ color: "#555", fontSize: "16px", marginTop: "10px",marginBottom:"0px" }}>Blogs</p>
                <p   style={{ color: "#555", fontSize: "16px", marginTop: "10px",marginBottom:"0px" }}>Academy</p>
                <p   style={{ color: "#555", fontSize: "16px", marginTop: "10px",marginBottom:"0px" }}>knowledge</p>
              </Col>
              <Col className="mt-4">
                <h3
                  style={{
                    color: "#22205F",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  COMPANY
                </h3>
                <p   style={{ color: "#555", fontSize: "16px", marginTop: "10px",marginBottom:"0px" }}>About us</p>
                <p   style={{ color: "#555", fontSize: "16px", marginTop: "10px",marginBottom:"0px" }}>Partner Program</p>
              </Col>
              <Col className="mt-4">
                <h3
                  style={{
                    color: "#22205F",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  POLICY
                </h3>
                <p   style={{ color: "#555", fontSize: "16px", marginTop: "10px",marginBottom:"0px" }}>Terms & Condition</p>
                <p   style={{ color: "#555", fontSize: "16px", marginTop: "10px",marginBottom:"0px" }}>Privacy Policy</p>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </div>
  );
}

export default App;
