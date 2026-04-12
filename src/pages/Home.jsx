import Books from "../components/sections/Books";
import Hero from "../components/sections/hero";



export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8 ">
      <Hero></Hero>
      <Books></Books>
      </main>
    </>
  );
}
