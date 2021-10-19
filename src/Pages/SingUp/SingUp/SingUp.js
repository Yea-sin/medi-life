import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const SingUp = () => {
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
          <div>
            <Container className="text-start w-50 my-5">
              <h2 className="text-center title">Please Sing Up:</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 auth-route">
                  <Link to="/singIn">Already have an account?</Link>
                </Form.Group>
                <Button variant="success" type="submit">
                  Sing Up
                </Button>
              </Form>
              <p>---------------------or-------------------</p>
              <Button
                onClick={() => singInUsingGoogle()}
                variant="outline-success">
                Sing Up With Google
              </Button>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default SingUp;
