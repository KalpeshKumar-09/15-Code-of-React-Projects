import Menu from "./components/Menu";
import Category from "./components/Category";
import { useState } from "react";
import menu from "./data";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))]; // use to get single value not repeated value

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);

    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Out Menu</h2>
          <div className="underline"></div>
        </div>
        <Category filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
