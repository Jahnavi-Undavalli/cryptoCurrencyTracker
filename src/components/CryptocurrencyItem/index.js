import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li>
      <img src={currencyLogo} alt={currencyName} className="img" />
      <h1 className="heading">{currencyName}</h1>
      <p className="paragraph">{usdValue}</p>
      <p className="paragraph">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
