import React from "react";
import "./SingIn.css";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const SingIn = () => {
  const { singInUsingGoogle, user, logOut } = useAuth();

  return (
    <>
      {user?.displayName ? (
        <div className="my-5">
          <div>
            <img src={user.photoURL} style={{ borderRadius: "50%" }} alt="" />
            <h4>Singed in as : {user.displayName}</h4>
          </div>
          <Button onClick={() => logOut()} variant="outline-primary">
            Sing Out
          </Button>
        </div>
      ) : (
        <div>
          <Container className="text-start w-50 my-5">
            <h2 className="text-center title">Please Sing In:</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3 auth-route">
                <Link to="/singUp">Don't have an account?</Link>
              </Form.Group>
              <Button variant="success" type="submit">
                Sing In
              </Button>
            </Form>
            <p>---------------------or-------------------</p>
            <Button
              onClick={() => singInUsingGoogle()}
              variant="outline-success">
              Sing In With Google
            </Button>
          </Container>
        </div>
      )}
    </>
  );
};

export default SingIn;
