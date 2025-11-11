import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/RightAside";
import ToyDetailsCard from "./ToyDetailsCard";
import { useLoaderData, useParams } from "react-router";

const CardDetails = () => {

    const data = useLoaderData()
    const {id} = useParams()
    const [toys, setToys] = useState({})
    // console.log(data, id, toys)

    useEffect(()=>{
        const toyDetails = data.find(singleToy => singleToy.toyId == id)
        setToys(toyDetails)
    },[data, id])
    

  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5 py-3">
        <section className="col-span-9">
          <h2 className="font-bold text-3xl">Toy Details</h2>
          <ToyDetailsCard toys={toys}></ToyDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default CardDetails;
