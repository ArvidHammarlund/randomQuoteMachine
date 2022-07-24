import Header from "./Header.js";
import QuoteBox from "./QuoteBox.js";
import Footer from "./Footer";
import quoteImporter from "./quoteImporter.js";

import {useState} from "react";

function App() {
  // Import quote Data
  const quoteList = quoteImporter();
  let [quoteText, setQuoteText] = useState(quoteList);

  // Handlers 
  function handleClick() {
    setQuoteText(quoteImporter())
  };
  // HTML return
  return (
    <div className="App themeColor">
      <Header />
      <QuoteBox quoteText={quoteText} />
      <Footer handleClick={handleClick} />
    </div>
  );
}

export default App;
