import Hello from "./components/hello";

const Home = () => {
  console.log(`what type of a component am i`)
  return(
  <main>
    <div className="text-5xl underline bold"> Welcome to Next.js !</div>
    <Hello />
  </main>
  )
};
export default Home;