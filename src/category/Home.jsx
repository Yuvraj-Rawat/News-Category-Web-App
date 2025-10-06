import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

function Home() {
  let [newsData, setnewsData] = useState([]);

  useEffect(() => {
    axios.get("https://inshorts.vercel.app/news/top").then((response) => {
      setnewsData(response["data"]["data"]["articles"]);
    });
  }, []);
  return (
    <div className="bg-amber-200 border-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 text-center">
      {newsData.map((value) => {
        return (
          <>
            <div className="bg-white rounded-lg px-6 py-4  my-4 shadow-xl w-[80%] mx-auto">
              <img
                src={value.imageUrl}
                alt=""
                className="h-[250px] w-[500px]"
              />
              <h1 className="text-2xl py-2 text-left">{value.title}</h1>
              <p className="text-left">{value.content}</p>
              <h3 className="text-right my-2 ">{value.authorName}</h3>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Home;
