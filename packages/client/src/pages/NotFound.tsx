import { Link } from "react-router-dom";
import { BackgroundLayout } from "$components/Background";

export const NotFoundPage = () => {
  return (
    <BackgroundLayout>
      <div className="flex flex-col text-center gap-8">
        <h1 className="text-4xl">
          404 &ndash; Nothing's here!
        </h1>
        <Link to="/" className="text-blue-500 font-bold">
          Go back
        </Link>
      </div>
    </BackgroundLayout>
  ); 
};
