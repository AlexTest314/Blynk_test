import React from "react";
import ItemsContextProvider from "../ItemsContext";
import ItemsCard from "../ItemsCard";
import Comments from "../Comments";
import "./index.css";

const Main = () => {
  return (
	<main className='main-wrapper'>
    <div className='main-container'>
      <div className='wrapper-cards'>
        <ItemsContextProvider>
          <ItemsCard />
          <Comments />
        </ItemsContextProvider>
      </div>
    </div>
	 </main>
  );
};

export default Main;
