import { useEffect, useState } from "react";
import "./App.css";
import "./styles/header.css";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    fecthDimension(newLocation);
  };

  const fecthDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const radomDimension = getRandomDimension(126);
    fecthDimension(radomDimension);
  }, []);

  return (
    <>
      <header className="bg-[url('/images/background-header.png')] w-full min-h-[200px] flex justify-center ">
        <div className="bg-[url('/images/sol.png')] bg-contain bg-no-repeat bg-center h-[150px] flex justify-center items-center">
          <img className="w-[260px]" src="/images/logo.png" alt="" />
        </div>
      </header>
      <main className=" bg-[url('/images/bg-main.png')]  min-h-screen  min-w-screen font-Fira-Code  bg-cover  bg-full  ">
        <section className=" text-white grid justify-center gap-6">
          <LocationForm handleSubmit={handleSubmit} />
          <LocationInfo currentLocation={currentLocation} />
          <ResidentList
            residents={currentLocation?.residents ?? []}
            currentLocation={currentLocation}
          />
        </section>
      </main>
    </>
  );
}

export default App;
