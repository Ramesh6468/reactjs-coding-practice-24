import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  getCurrencyList = () => {
    const {cyrptoCurrencyData} = this.props
    return (
      <div className="currencyCardContainer">
        {cyrptoCurrencyData.map(each => (
          <CryptocurrencyItem key={each.id} cyrptoCurrencyDetails={each} />
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="listContainer">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="cardBar">
          <div className="NavCard">
            <p className="name">Coin Type</p>
            <div className="currencyCard">
              <p className="usd">USD</p>
              <p className="usd2">EURO</p>
            </div>
          </div>

          <div className="resultContainer">{this.getCurrencyList()}</div>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
