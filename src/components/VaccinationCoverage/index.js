// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {details} = props
  console.log(details)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${number.toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="chart-container">
      <h1>Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={details}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="Dose 1" fill=" #5a8dee" barSize="15" />
          <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="15%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
