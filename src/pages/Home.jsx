import React, { use } from "react";
import ToyCard from "./ToyCard";

const toysPromise = fetch("/toysData.json").then((res) => res.json());
// console.log(toysPromise);


const Home = () => {

    const allToys = use(toysPromise)
    
    

  return (
    <div>
      <h2 className="font-bold text-3xl text-indigo-800 text-center mb-5">Popular Toys</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {
            allToys.map(toy=>(<ToyCard key={toy.toyId} toy={toy}></ToyCard>))
        }
      </div>
    </div>
  );
};

export default Home;
