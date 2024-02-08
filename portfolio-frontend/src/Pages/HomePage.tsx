import React from "react";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/portfolios"
  );

  console.log(loading, error, data);

  return <div>HomePage</div>;
};

export default HomePage;
