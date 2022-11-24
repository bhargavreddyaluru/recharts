// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {details} = props
  return (
    <div className="chart-container">
      <h1>Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={details}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
