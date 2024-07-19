import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from 'recharts';

const data = [
    { name: 'January', uv: 400, pv: 2400, amt: 2400 },
    { name: 'February', uv: 300, pv: 1398, amt: 2210 },
    { name: 'March', uv: 200, pv: 9800, amt: 2290 },
    { name: 'April', uv: 278, pv: 3908, amt: 2000 },
    { name: 'May', uv: 189, pv: 4800, amt: 2181 },
  ];


const SimpleLineChart = () => (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );

const Analysis = () => {

    
    return  (
        <div className="outlet">
            <SimpleLineChart />
        </div>
    )
}

export default Analysis;