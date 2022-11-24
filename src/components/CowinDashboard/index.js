import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const loadingStatus = {
  initial: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    lastSevenDays: [],
    byAge: [],
    byGender: [],
    loading: loadingStatus.initial,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({loading: loadingStatus.initial})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {method: 'GET'}
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.setState({
        lastSevenDays: data.last_7_days_vaccination,
        byAge: data.vaccination_by_age,
        byGender: data.vaccination_by_gender,
        loading: loadingStatus.success,
      })
    } else if (response.status >= 400) {
      this.setState({loading: loadingStatus.failure})
    }
  }

  loadingView = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  failureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  loadingBasedRender = () => {
    const {lastSevenDays, byAge, byGender} = this.state
    const {loading} = this.state

    switch (loading) {
      case loadingStatus.initial:
        return this.loadingView()
      case loadingStatus.success:
        return (
          <>
            <VaccinationCoverage details={lastSevenDays} />
            <VaccinationByGender details={byGender} />
            <VaccinationByAge details={byAge} />
          </>
        )

      default:
        return <h1>Fail</h1>
    }
  }

  render() {
    return (
      <div className="home-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h1 className="header-heading">Co-WIN</h1>
        </div>
        <div>
          <h1>CoWIN Vaccination in India</h1>
          {this.loadingBasedRender()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
