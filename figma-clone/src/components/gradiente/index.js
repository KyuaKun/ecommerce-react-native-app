import { LinearGradient } from "expo-linear-gradient";

export const Gradiente = (props) => {
  if (props.position === "top") {
    return (
      <LinearGradient
        colors={["#00ff", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "40%",
          zIndex: -1,
        }}
      />
    );
  } else {
    return (
      <LinearGradient
        colors={["transparent", "#00ff"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "30%",
          zIndex: -1,
        }}
      />
    );
  }
};


