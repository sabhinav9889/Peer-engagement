"use client";
import "../../public/pjm.jpg";
import Card from "./card"

const Peer = () => {
  return (
    <div className="">
      <div className="w-full">
        <p className="text-2xl p-8 sm:ml-20 ml-3" style={{ color: "#303030" }}>
          Explore Communities
        </p>
      </div>
      <hr className="w-auto sm:ml-36 sm:mr-36 ml-12 mr-12" />
      <p
        className="text-xl text-blue-400 sm:ml-36 sm:mr-36 ml-12 mt-4"
        style={{ color: "#88BBD6" }}
      >
        Community Guidelines
      </p>
      <div className="mt-2">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Peer;
