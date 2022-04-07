import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [ data, setData ] = useState([]);
  
  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data.filter((genre) => { return genre.value > 0 });
    };
    setData(() => getData());
  }, [events]);
  
  
  
  
  const colors = [
    "#d0427f", 
    "#f8a01f", 
    "#528272", 
    "#f15f4b", 
    "#7dbeb8", 
    "#5c69a0"
  ];

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400} >
        <Pie 
          data={data}
         cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;






