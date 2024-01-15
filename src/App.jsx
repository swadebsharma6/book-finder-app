import BooksContainer from "./components/BooksContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";


const App = () => {
  return (
    <section>
      <Header></Header>
      <Search></Search>
      <BooksContainer></BooksContainer>
      <Footer></Footer>
    </section>
  );
};

export default App;