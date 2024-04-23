import API from "./components/API";
import ProductCard from "./components/ProductCard";
import "./scss/main.scss";

const App = () => {
  return (
    <div>
      {/* <div className="title-card">FETCH PRODUCTS DATA USING REDUX</div>
      <ProductCard /> */}
      <API/>
    </div>
  );
};

export default App;
