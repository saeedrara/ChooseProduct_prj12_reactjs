import React ,{ useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';


const allCatogeries = ['همه', ...new Set(items.map((item)=>item.category))];


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCatogeries);

  const filterItems = (category) => {
    if(category === "همه"){
      setMenuItems(items);
      return
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>محصولات ما</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
