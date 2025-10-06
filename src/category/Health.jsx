import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

function Health() {
  let [newsData, setnewsData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
      .then((response) => {
        setnewsData(response["data"]["articles"]);
      });
  }, []);
  return (
    <>
      <div className="bg-amber-200 border-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 text-center">
        {newsData.map((value) => {
          return (
            <>
              <div className=" text-center  bg-white rounded-lg px-6 py-4  my-4 shadow-xl w-[90%] mx-auto">
                <img
                  src={value.urlToImage}
                  alt=""
                  className="h-[200px] w-[600px]"
                />
                <h1 className="text-2xl p-2 text-left">{value.title}</h1>
                <p className="text-left">{value.content}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Health;
