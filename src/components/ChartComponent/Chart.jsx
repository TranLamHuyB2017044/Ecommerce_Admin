import styles from "./Chart.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,

  ResponsiveContainer,
} from "recharts";
import { chartData } from "../../data";
function Chart() {

  return (
    <div className={styles.chart_container}>
      <h2 className={styles.chart_title}>User Analytics</h2>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#5550bd" strokeDasharray={5} />

          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
