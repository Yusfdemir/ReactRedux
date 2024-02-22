import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";

const Carts = () => {
  const { totalData, errorOfTotal, stateOfTotatData, selectedCountry } =
    useSelector((state) => state.covid);
    if(errorOfTotal){
        return <Error message={`Veriler Çekilirken Hata Oluştu : ${errorOfTotal}`}/>
    }
  return (
    <>
     
      {stateOfTotatData === "loading" ? (
       <Loading/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 my-8">
          <div className=" flex flex-col gap-2 bg-[#bfdbfe] p-5 border-b-8 border-[#3b82f6] rounded-lg">
            <h2 className="font-semibold text-xl">Infected</h2>
            <h1 className="font-extrabold text-2xl">{totalData.confirmed}</h1>
            <p>
              <span className="font-semibold text-xl">Last Updated at:</span>{" "}
              <p className="text-zinc-400 text-xl font-bold">
                {totalData.last_update}
              </p>{" "}
            </p>
            <p className="font-medium text-lg">
              Number of Infected cases of COVID-19 in{" "}
              {selectedCountry ? selectedCountry : "World"}
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-[#bbf7d0] p-5 border-b-8 border-[#22c55e] rounded-lg">
            <h2 className="font-semibold text-xl">Recovered</h2>
            <h1 className="font-extrabold text-2xl">{totalData.recovered}</h1>
            <p>
              {" "}
              <span className="font-semibold text-xl">
                Last Updated at:
              </span>{" "}
              <p className="text-zinc-400 text-xl font-bold">
                {totalData.last_update}
              </p>{" "}
            </p>
            <p className="font-medium text-lg">
              Number of Recovered cases of COVID-19 in{" "}
              {selectedCountry ? selectedCountry : "World"}
            </p>
          </div>
          <div className=" flex flex-col gap-2 bg-[#fecaca] p-5 border-b-8 border-[#ef4444] rounded-lg">
            <h2 className="font-semibold text-xl">Deaths</h2>
            <h1 className="font-extrabold text-2xl">{totalData.deaths}</h1>
            <p>
              {" "}
              <span className="font-semibold text-xl">
                Last Updated at:
              </span>{" "}
              <p className="text-zinc-400 text-xl font-bold">
                {totalData.last_update}
              </p>{" "}
            </p>
            <p className="font-medium text-lg">
              Number of Deaths cases of COVID-19 in{" "}
              {selectedCountry ? selectedCountry : "World"}
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-[#fef08a] p-5 border-b-8 border-[#eab308] rounded-lg">
            <h2 className="font-semibold text-xl">Active</h2>
            <h1 className="font-extrabold text-2xl">{totalData.active}</h1>
            <p>
              {" "}
              <span className="font-semibold text-xl">
                Last Updated at:
              </span>{" "}
              <p className="text-zinc-400 text-xl font-bold">
                {totalData.last_update}
              </p>{" "}
            </p>
            <p className="font-medium text-lg">
              Number of Active cases of COVID-19 in{" "}
              {selectedCountry ? selectedCountry : "World"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Carts;
