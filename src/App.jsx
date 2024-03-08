import React from "react";
import Details from "./components/Details";
import MyForm from "./components/Form";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold bg-violet-500 rounded-md m-10 h-40 p-5">
        lets learn redux toolkit :)
      </h1>
      <h2 className="text-2xl font-bold bg-pink-500 h-20 rounded-md m-10 text-center p-5">
        here are the persons
      </h2>
      <Details />
      <MyForm />
    </div>
  );
};

export default App;
