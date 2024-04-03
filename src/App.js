import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState();
  useEffect(() =>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    }
    )
  }, [])

  const onChange = (event) => {
    setMoney(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong> Loading...</strong> : null}
      <label>USD : </label>
      <input type="number" value={money} onChange={onChange}></input>
      <br/>
      {/* <select name="co">
        {coins.map((coin) => <option key={coin.id}>{coin.name}</option>)}
      </select> */}
      {/* <input type="number" value={coins[0].quotes.USD.price}></input> */}



      <ul>
        {coins.map((coin) => <li>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>)}
      </ul>
    </div>
  );
}

export default App;
