import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgHero from "../../src/assets/images/Asset5.png";
import * as styles from "./Home.css";
import Btn from "../components/common/Btn";

function Home() {
  return (
    <Container className={styles.bg}>
      <Row>
        <Col>
          <img className={styles.imgHero} src={imgHero} alt="heroImg" />
          <h1 className={styles.mainHero}>Art Supplies for Everyone</h1>
          <h2 className={styles.subHero}>
            Creative space Artists, hobbyists, students, and anyone who loves to
            express themselves creatively.
          </h2>
          <Btn>SIGN UP</Btn>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
