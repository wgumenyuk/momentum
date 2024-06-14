import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { PastWorkouts } from "$internal/api";

type FormattedData = {name: string, workoutId: string};
const Graph = () => {
  const [ data, setData ] = useState<FormattedData[]>([]);

  const loadData = async () => {
    try {
      const response = await PastWorkouts.getAll("");
      if(!response || !response.ok) {
        return null;
      };
      const formattedData = response.data.workouts.map((PastWorkout) => ({
        name: `${new Date(PastWorkout.startedAt).toLocaleDateString()} - ${new Date(PastWorkout.finishedAt).toLocaleDateString()}`,
        workoutId: PastWorkout.workoutId
      }));
      setData(formattedData);
    } catch(error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <LineChart width={500} height={300} data={data}>∏
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }}/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Line type="monotone" dataKey="workoutId" stroke="#8884d8" activeDot={{ r: 8 }}/>
    </LineChart>
  );
};

export default Graph;

