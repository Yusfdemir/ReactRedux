import React, { useEffect, useState } from "react";
import { fetchText } from "../redux/textAppSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";

const Forms = () => {
  const dispatch = useDispatch();
  const { text, status, error } = useSelector((state) => state.textApp);
  const [data, setData] = useState({ type: "text", number: 4 });
  useEffect(() => {
    console.log("data", data);
    dispatch(fetchText(data));
    console.log("text", text);
  }, []);
  useEffect(() => {
    console.log("data", data);
    dispatch(fetchText(data));
    console.log("text", text);
  }, [data]);
  return (
    <div className="">
      <div>
        <form className="flex justify-evenly align-center ">
          <label className="border-2 border-indigo-700 rounded-md flex align-center gap-4 p-2">
            Paragraf Tipi:
            <select
              value={data.type}
              onChange={(e) => {
                setData({ ...data, type: e.target.value });
              }}
              className="outline-none bg-gray-200"
            >
              <option value="text">Text</option>
              <option value="html">HTML</option>
            </select>
          </label>
          <label className="border-2 border-indigo-700 rounded-md flex gap-2 p-2">
            Paragraf Sayısı:
            <input
              type="number"
              value={data.number}
              onChange={(e) => {
                if(e.target.value >=1){
                   setData({ ...data, number: e.target.value }); 
                }
                
              }}
              className="outline-none"
              placeholder="Paragraf sayısı"
            />
          </label>
        </form>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 p-10  bg-gray-200 mt-5 rounded-xl">
          {status === "loading" && <Loading />}
          {status === "failed" && <Error message={error} />}
          {status === "succeeded" && text}
        </div>
      </div>
    </div>
  );
};

export default Forms;
