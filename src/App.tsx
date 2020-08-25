import React from "react";
import { useProducts, Product } from "./products";

import "./App.css";

const sortByVotes = (p1: Product, p2: Product) => p2.upvotes - p1.upvotes;
const sortByDate = (p1: Product, p2: Product) => p2.createdAt.getTime() - p1.createdAt.getTime();

const App: React.FunctionComponent = () => {
  const products = useProducts();

  const topProducts = products.sort(sortByVotes).slice(0, 3);
  const latestProducts = products.sort(sortByDate);

  return (
    <div className='App'>
      <section>
        <h2>top 3 projects</h2>
        <ProjectList products={topProducts} />
      </section>

      <section>
        <h2>latest projects</h2>
        <ProjectList products={latestProducts} />
      </section>
    </div>
  );
};

const ProjectList: React.FunctionComponent<{ products: Product[] }> = ({ products }) => {
  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <code>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </code>
    </div>
  );
};

export default App;
