import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// Intern
import { PastWorkouts } from "$internal/api";

type FormattedData = {
  workoutId: string;
  name: string;
};

/**
  `Graph`-Komponente.
*/
export const Graph = () => {
  const [ data, setData ] = useState<FormattedData[]>([]);

  const loadData = async () => {
    const response = await PastWorkouts.getAll();

    if(!response || !response.ok) {
      return null;
    }

    const formattedData = response.data.workouts.map((pastWorkout) => {
      const from = new Date(pastWorkout.startedAt).toLocaleDateString();
      const to = new Date(pastWorkout.finishedAt).toLocaleDateString();

      return {
        workoutId: pastWorkout.workoutId,
        name: `${from} - ${to}`
      };
    });

    setData(formattedData);
  };

  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, []);

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }}/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Line
        type="monotone"
        dataKey="workoutId"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
