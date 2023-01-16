import Lottie from "lottie-react";
import Animation from "../assets/please-wait.json";

export const LoadingAnimation = () => {
  return <Lottie animationData={Animation} loop={true} autoplay />;
};
