import React from 'react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

const StatsChartProps = {
  stats: React.PropTypes.array.isRequired,
  possession: React.PropTypes.array.isRequired,
  colours: React.PropTypes.array.isRequired,
  opponent: React.PropTypes.string.isRequired
};

function StatsChart ({stats, possession, colours, opponent}) {
  return (
    <div className="stats-container md-block-centered">
      <h6>Possession</h6>
      <div className="md-cell--6">
        <PieChart width={400} height={200}>
          <Pie
            data={possession}
            nameKey="team"
            startAngle={90}
            endAngle={450} >
            {possession.map((entry, index) =>
              <Cell key={index} fill={colours[index % colours.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="md-cell--6">
        <BarChart
          width={400}
          height={200}
          data={stats}>
          <XAxis dataKey="stat" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Leicester City" fill={colours[0]} />
          <Bar dataKey="opponent" name={opponent} fill={colours[1]}/>
        </BarChart>
      </div>
    </div>
  )
}


StatsChart.propTypes = StatsChartProps;

export default StatsChart;
