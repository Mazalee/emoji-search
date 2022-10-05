import { useState } from 'react';
import './App.css';
import EmojiResults from './components/Emojis/EmojiResults';
import Filter from './components/Emojis/Filter';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';




function App() {
  
  const [filteredEmojis, setFilteredEmojis] = useState(Filter('', 20));

  const handleChange = (e) => {
    setFilteredEmojis(Filter(e.target.value, 15));
  }

  return (
    <div className="">
      <Header />
      <SearchBar handleChange={handleChange} />
      <EmojiResults emojiData={filteredEmojis} />
    </div>
  );
}

export default App;
