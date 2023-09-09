import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {currencyData} = props

  return (
    <div className="bg-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="img"
      />
      <div className="inner-container">
        <div>
          <h1 className="heading">Coin Type</h1>
          <h1 className="heading">USD</h1>
          <h1 className="heading">EURO</h1>
        </div>
        <ul>
          {currencyData.map(item => (
            <CryptocurrencyItem currencyDetails={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
