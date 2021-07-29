import { useState, useEffect, useMemo } from "react";
import "./main-page.css";
import Header from "./header";
import FeaturedDistillery from "./featured-distillery";
// import HouseFilter from "./house-filter";
// import SearchResults from "../search-results";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import DistilleryFromQuery from "../house/HouseFromQuery";

function App() {
  const [allDistilleries, setAllDistilleries] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/distillery.json");
      const distilleries = await rsp.json();
      setAllDistilleries(distilleries);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allDistilleries.length) {
      const randomIndex = Math.floor(Math.random() * allDistilleries.length);
      return allDistilleries[randomIndex];
    }
  }, [allDistilleries]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        {/* <HouseFilter allDistilleries={allDistilleries} /> */}

        <Switch>
          {/* <Route path="/searchresults/:country">
            <SearchResults allDistilleries={allDistilleries} />
          </Route>

          <Route path="/house/:id">
            <DistilleryFromQuery allHouses={allHouses} />
          </Route> */}

          <Route path="/">
            <FeaturedDistillery distillery={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
