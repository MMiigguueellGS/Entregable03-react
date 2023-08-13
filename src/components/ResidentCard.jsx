import React, { useEffect, useState } from "react";
import axios from "axios";
const ResidentCard = ({ residentUrl }) => {
  const [ResidentInfo, setResidentInfo] = useState(null)
  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  const residentStatus ={
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500"
  }
  return (
    <article className="grid justify-center ">
      <header className="border-2 border-green-500 relative w-full">
        <img className="h-full w-full object-cover object-center " src={ResidentInfo?.image} alt="" />
        <div className="flex items-center gap-2 px-4 absolute bottom-[10%] left-[33%] border-2 border-green-500 bg-neutral-950">
          <div className={`h-[10px] aspect-square ${residentStatus[ResidentInfo?.status]} rounded-full`}></div>
          {ResidentInfo?.status}
        </div>
      </header>
      <section className="border-2 border-green-500 p-2 w-full ">
        <h3>{ResidentInfo?.name}</h3>
        <ul className="">
          <li ><span className="text-stone-600 font-medium">Species:</span> <span className="font-semibold">{ResidentInfo?.species}</span></li>
          <li ><span className="text-stone-600 font-medium" >Origin: </span><span className="font-semibold">{ResidentInfo?.origin.name}</span></li>
          <li ><span className="text-stone-600 font-medium">Times apper:</span><span className="font-semibold">{ResidentInfo?.episode.length}</span> </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
