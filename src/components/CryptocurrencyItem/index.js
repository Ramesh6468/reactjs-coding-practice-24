import './index.css'

const CryptocurrencyItem = props => {
  const {cyrptoCurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    usdValue,
    euroValue,
  } = cyrptoCurrencyDetails
  return (
    <li className="bgContainer">
      <div className="logoCard">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="title2">{currencyName}</p>
      </div>
      <div className="currencyCard">
        <p className="value1">{usdValue}</p>
        <p className="value1">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
