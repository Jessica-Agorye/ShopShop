import "@fortawesome/fontawesome-free/css/all.css";
import Card from "./Components/Card";
import Hero from "./Components/Hero.jsx";
import data from "./assets/data";
import Nav from "./Components/Nav.jsx";
import ProductTitle from "./Components/ProductTitle.jsx";
import Banner from "./Components/Banner.jsx";
import TopCollectionsTitle from "./Components/TopCollectionsTitle.jsx";
import TopCollectionsCard from "./Components/TopCollectionsCard.jsx";
import productData from "./assets/productData.js";
import Footer from "./Components/Footer.jsx";
import NewsLetter from "./Components/NewsLetter.jsx";

function App() {
  const newData = data.items.map((item) => <Card key={item.id} {...item} />);
  const product = productData.items.map((item) => (
    <TopCollectionsCard key={item.id} {...item} />
  ));

  return (
    <>
      <div>
        <Nav />
        <Hero />
        <ProductTitle />
        <div className="flex justify-evenly  h-screen mx-20  pt-28  leading-8">
          {newData}
        </div>
        <Banner />
        <TopCollectionsTitle />

        <div className="grid grid-cols-4 gap-4 h-full   pt-24  mx-32 leading-8">
          {product}
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

export default App;
