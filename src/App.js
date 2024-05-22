import './App.css';
import config from './cardsConfig'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';

function stringToHash(string) {
    const date = '5.22.24'
    let hash = 0;

    if (string.length == 0) return hash;
    const tohash = string + date

    for (let i = 0; i < tohash.length; i++) {
        let char = tohash.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}

const createPages = function () {
  const pages = []
  let cards = []

  config.forEach(card => {
    [...Array(card.amount || 1)].forEach(() => {

      if (cards.length == 9) {
        pages.push(cards)
        cards = [];
      }

      cards.push({...card, "key": uuidv4(), "version": stringToHash(card.title)})
    });
  });

  pages.push(cards)

  return pages
}

function App() {
  const pages = createPages()

  return (
    <>
      {pages.map((cards, i) => (
        <div className="cards" key={i}>
          {cards.map(card => (<Card info={card} key={card.key} />))}
        </div>
      ))}
    </>
  );
}

export default App;
