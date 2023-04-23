import { GetServerSideProps } from "next";
import React from "react";

interface Props {}

const Login = () => {
  return <div>Login</div>;
};

export default Login;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  return {
    props: {},
  };
};
