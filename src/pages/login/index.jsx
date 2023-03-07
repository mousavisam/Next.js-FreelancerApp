import { useRef } from "react";
import { Login as LoginUI } from "../../components";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.info(data);
  };

  return (
    <>
      <LoginUI
        onSubmit={onSubmit}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
    </>
  );
};

export default Login;
