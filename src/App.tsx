import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import PackagesAndKits from "./components/packagesAndKits/PackagesAndKits";
import ProductItems from "./components/productitems/ProductItems";
import { AmoFormProvider } from "./context/AmoFormProvider";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import HomeContainer from "./pages/HomeContainer";
import Packages from "./pages/Packages";
import PackagesItem from "./pages/PackagesItem";
import PageNotFound from "./pages/PageNotFound";
import ProductsItem from "./pages/ProductsItem";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ScrollToTopButton from "./components/scrollTopButton/ScrollTopButton";
import SeasonFive from "./components/seasonFive/SeasonFive";

function App() {
  return (
    <AmoFormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<HomeContainer />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Projects />} />
            <Route
              path="season"
              element={
                <Packages
                  headline="Season5 Climate Controllers"
                  type="seasonFive"
                >
                  <SeasonFive />
                </Packages>
              }
            />
            <Route
              path="packages"
              element={
                <Packages headline="Aranet Packages and Kits" type="aranet">
                  <PackagesAndKits />
                </Packages>
              }
            />
            <Route path="products" element={<ProductItems />} />
            <Route path="products/:productId" element={<ProductsItem />} />
            <Route path="packages/:packageId" element={<PackagesItem />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton />
    </AmoFormProvider>
  );
}

export default App;
