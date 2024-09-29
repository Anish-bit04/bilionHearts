import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
// import Publication from "./components/Publication";

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center">
    <Header/>
    <Main  />
    {/* <Publication /> */}
    <Footer />
  </div>
  )
}

export default App
