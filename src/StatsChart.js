import React, { PropTypes } from 'react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

const StatsChart = props =>
  <div className="stats-container md-block-centered">
    <h6>Possession</h6>
    <div className="md-cell--6">
      <PieChart width={400} height={200}>
        <Pie
          data={props.possession}
          nameKey="team"
          startAngle={90}
          endAngle={450} >
          {props.possession.map((entry, index) =>
            <Cell key={index} fill={props.colours[index % props.colours.length]} />)}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
    <div className="md-cell--6">
      <BarChart
        width={400}
        height={200}
        data={props.stats}>
        <XAxis dataKey="stat" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Leicester City" fill={props.colours[0]} />
        <Bar dataKey="opponent" name={props.opponent} fill={props.colours[1]}/>
      </BarChart>
    </div>
  </div>


StatsChart.propTypes = {
  stats: PropTypes.array,
  possession: PropTypes.array,
  colours: PropTypes.array,
  opponent: PropTypes.string
};

export default StatsChart;
