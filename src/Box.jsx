import React from "react";

function Box(props) {
  return (
    <div>
      <div className="bg-black w-auto h-28 mx-96 mt-8 rounded-2xl flex justify-center">
        <input
          type="text"
          placeholder= "Password"
          value={props.password}
          readOnly
          className=" bg-slate-50 h-12 w-80 rounded-lg mt-5"
          ref={props.passwordRef}
        />
        <div className=" bg-blue-700 rounded-lg h-12 mt-5 hover:bg-amber-500">
          <button className=" text-white m-3" onClick={props.copyPasswordToClipboard}>Copy</button>
        </div>
        <input type="checkbox" className=" ml-3 mb-5 mt-5 cursor-pointer" onChange={() => {props.setCharacters((prev) =>(!prev))}}/>{" "}
        <label className="text-white bg-black mt-11 ">Characters</label>
        <input type="checkbox" className=" ml-3 mb-5 mt-5 cursor-pointer" onChange={() => {props.setNum((prev) => (!prev))}}/>{" "}
        <label className="text-white bg-black mt-11 ">Numbers</label>
        <input
          type="range"
          min={6}
          max={20}
          className=" cursor-pointer ml-4 mt-1"
          onChange={(e) => props.setLength(e.target.value)}
        />
        <label className="text-white bg-black mt-11 ml-2">
          Length : {props.length}
        </label>
      </div>
    </div>
  );
}

export default Box;
