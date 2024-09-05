import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Btn from "../../components/common/Btn";
import * as styles from "./Login.css";

function Login() {
  return (
    <Form className={styles.logInset}>
      <h1 className={styles.mainText}>LOGIN</h1>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="Your Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Your Password" />
        </Col>
      </Form.Group>

      <Btn>LOGIN</Btn>
    </Form>
  );
}

export default Login;
