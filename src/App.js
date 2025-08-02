import "./App.css";
import Header from "./Header";
import Entry from "./Entry";
import data from "./data";
import Footer from "./Footer";

function App() {
  const entryItems = data.map((entry) => <Entry key={entry.id} {...entry} />);
  return (
    <div>
      <Header />
      {entryItems}
      <Footer />
    </div>
  );
}

export default App;
