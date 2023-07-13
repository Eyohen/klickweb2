import { useNavigate } from "react-router-dom";
import BackIcon from "./BackIcon";
import Profile from "./Profile";
import StoreGrid from "./StoreGrid";

const StoreProfile = () => {
  const navigate = useNavigate();
  return (
    <section className="container mt-4 flex flex-col">
      <button
        className="text-primary flex items-center gap-2 mb-8"
        onClick={() => navigate(-1)}
      >
        <BackIcon />
        Go back
      </button>
      <div className="flex gap-5">
        <Profile />
        <StoreGrid />
      </div>
    </section>
  );
};

export default StoreProfile;
