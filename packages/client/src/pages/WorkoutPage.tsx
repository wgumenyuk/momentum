import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

// Intern
import { useWorkout } from "$components/WorkoutContext";
import { BackgroundLayout } from "$components/Background";
import { Input } from "$components/Input";
import { Button } from "$components/Button";
import { Countdown } from "$components/Countdown";

// Types
import type { Dispatch, FC, SetStateAction } from "react";
import type { PastWorkoutSchemaType } from "@momentum/shared";
import { PastWorkouts } from "$internal/api";

type View = "working-phase" | "pause" | "end";

type PauseProps = {
  setView: Dispatch<SetStateAction<View>>;
};

type Set = {
  exerciseId: string;
  reps: number;
  weight: number;
};

type SetProps = {
  setIndex: number;
  data: Set;
  onChange: (setIndex: number, data: Set) => void;
};

type WorkingPhaseProps = {
  exercisesIndex: number;
  setExerciseIndex: Dispatch<SetStateAction<number>>;
  setView: Dispatch<SetStateAction<View>>;
};

const Pause: FC<PauseProps> = ({ setView }) => {
  const onEnd = () => {
    setView("working-phase");
  };

  return (
    <div className="
      flex
      flex-col
      justify-center
      items-center
      h-[calc(100vh-theme(margin.64))]
      gap-8
    ">
      <span className="text-6xl">
        <Countdown seconds={150} onEnd={onEnd}/>
      </span>
      <button className="text-blue-400 text-2xl" onClick={onEnd}>
        Skip countdown
      </button>
    </div>
  );
};

const Set: FC<SetProps> = ({ setIndex, onChange, data }) => {
  const [ reps, setReps ] = useState("0");
  const [ weight, setWeight ] = useState("0");

  useEffect(() => {
    onChange(setIndex, {
      exerciseId: data.exerciseId,
      reps: parseInt(reps),
      weight: parseInt(weight)
    });
  }, [ reps, weight ]);

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="
        grid
        place-content-center
        bg-blue-800
        min-w-10
        h-10
        rounded-full
      ">
        <span>{setIndex + 1}</span>
      </div>
      <Input
        type="text"
        className="bg-blue-800 px-0"
        placeholder={"0"}
        onChange={(value) => setReps(value)}
      />
      <span>&times;</span>
      <Input
        type="text"
        className="bg-blue-800 px-0"
        placeholder={"0"}
        onChange={(value) => setWeight(value)}
      />
      <span>kg</span>
    </div>
  );
};

const End: FC = () => {
  const navigate = useNavigate();
  const { activeWorkout, setActiveWorkout } = useWorkout()!;

  useEffect(() => {
    setActiveWorkout((workout) => {
      const w = { ...workout } as PastWorkoutSchemaType;
      w.finishedAt = new Date();
      return w;
    });
  }, []);

  const onReturn = async () => {
    const response = await PastWorkouts.create(
      activeWorkout as PastWorkoutSchemaType
    );

    if(!response || !response.ok) {
      console.error(response);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="
      flex
      flex-col
      justify-center
      items-center
      h-[calc(100vh-theme(margin.64))]
      gap-8
    ">
      <span className="text-4xl">Good work!</span>
      <Button variant="blue" onClick={onReturn}>Return to menu</Button>
    </div>
  );
};

const WorkingPhase: FC<WorkingPhaseProps> = ({
  exercisesIndex,
  setExerciseIndex,
  setView
}) => {
  const { activeWorkout, setActiveWorkout } = useWorkout()!;

  const sets = useMemo(() => {
    return activeWorkout!.exercises[exercisesIndex];
  }, [ exercisesIndex ]);

  const onChange = (setIndex: number, data: Set) => {
    setActiveWorkout((workout) => {
      const w = { ...workout } as PastWorkoutSchemaType;
      w.exercises[exercisesIndex][setIndex] = data;
      return workout;
    });
  };

  const onDone = () => {
    if(exercisesIndex + 1 >= activeWorkout!.exercises.length) {
      setView("end");
      return;
    }

    setExerciseIndex((i) => i + 1);
    setView("pause");
  };

  return (
    <div className="
      grid
      place-content-center
      h-[calc(100vh-theme(margin.64))]
      gap-16
    ">
      <div className="flex flex-col items-center gap-4">
        <span className="text-4xl">{sets[0].exerciseId}</span>
        <span className="text-blue-400 text-lg">{sets.length} Sets</span>
      </div> 
      <div className="flex flex-col items-center gap-4">
        {sets.map((set, i) => (
          <Set key={i} setIndex={i} data={set} onChange={onChange}/>
        ))}
      </div> 
      <Button variant="blue" onClick={onDone}>
        Done
      </Button>
    </div> 
  );
};

export const WorkoutPage: FC = () => {
  const [ exercisesIndex, setExercisesIndex ] = useState(0);
  const [ view, setView ] = useState<View>("working-phase");

  const navigate = useNavigate();
  const { activeWorkout } = useWorkout()!;

  const progress = useMemo(() => {
    // Einfacher Dreisatz zum Berechnen des prozentualen Fortschritts.
    return (view === "end") ?
      100 :
      (exercisesIndex * 100) / activeWorkout!.exercises.length; 
  }, [ view, exercisesIndex ]);

  const render = () => {
    switch (view) {
      case "working-phase": return <WorkingPhase
        exercisesIndex={exercisesIndex}
        setExerciseIndex={setExercisesIndex}
        setView={setView}
      />;
      case "pause": return <Pause setView={setView}/>;
      case "end": return <End/>;
    }
  };

  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">
        <div className="flex justify-between items-center h-8 mb-6">
          <button className="text-grey-500" onClick={() => navigate("/workouts")}>
            <ArrowLeftIcon size="28px"/>
          </button>
          <span className="text-lg">{progress}%</span>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {render()}
        </div>
      </div>
    </BackgroundLayout>
  );
};
