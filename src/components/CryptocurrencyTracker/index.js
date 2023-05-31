import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyData: [], isTrue: true}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    console.log(updatedData)
    this.setState({currencyData: updatedData, isTrue: false})
  }

  render() {
    const {currencyData, isTrue} = this.state
    return (
      <div className="finalContainer">
        {isTrue ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />{' '}
          </div>
        ) : (
          <div className="resultCard">
            <CryptocurrenciesList cyrptoCurrencyData={currencyData} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
