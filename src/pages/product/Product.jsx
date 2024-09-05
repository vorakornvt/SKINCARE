import Card from "react-bootstrap/Card";
import * as styles from "./Product.css";
import productImg from "../../assets/images/birmingham-museums-trust-9dnNnTrHxmI-unsplash.jpg";
import { Row, Col } from "react-bootstrap";
import Btn from "../../components/common/Btn";

function Product() {
  return (
    <div className={styles.productcardset}>
      <Card>
        <Card.Img variant="top" src={productImg} style={{ width: "30rem" }} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Btn>CONTACT ARTIST</Btn>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
