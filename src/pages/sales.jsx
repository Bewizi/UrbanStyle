import { Link } from "react-router-dom";

export const Sales = () => {
  return (
    <div>
      <div>
        <h1>
          <Link to={"/"}>UrbanStyle</Link>
        </h1>
      </div>
      <h1 className="text-3xl font-bold">Sales</h1>
    </div>
  );
};
