import Lottie from "react-lottie";
import * as animationData from "./loading.json";

function SuspenseContent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full h-screen bg-base-100 drop-shadow flex flex-col justify-center items-center">
      <Lottie options={defaultOptions} height={200} width={200} />;
      <span className="font-semibold">Wait a moment...</span>
    </div>
  );
}

export default SuspenseContent;
