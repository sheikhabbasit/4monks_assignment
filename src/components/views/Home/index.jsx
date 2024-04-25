import React from "react";
import MainView from "./MainView";
import StepperView from "./StepperView";

function HomeViewComponent() {
  return (
    <section className="w-100 flex h-[600px]">
      <MainView />
      <StepperView />
    </section>
  );
}

export default HomeViewComponent;
