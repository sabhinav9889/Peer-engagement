"use client"
import Head from "next/head";
import Peer from './components/peer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-100" >
        <Peer/>
      </main>
    </>
  );
}