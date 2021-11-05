import React, { useContext, useState, useEffect, createContext } from "react";

const StepContext = createContext();

export function useSteps() {
  return (context = useContext(StepContext));
}

export function StepsProvider({ children }) {
  const [steps, setSteps] = useState([]);

  function addStep(step) {
    setSteps((steps) => [...steps, step]);
  }

  function removeStep(stepId) {
    setSteps((steps) => steps.filter((step) => step.id !== stepId));
  }

  function updateStep(stepId, newStep) {
    setSteps((steps) =>
      steps.map((step) => {
        if (step.id === stepId) {
          return { ...step, ...newStep };
        }
        return step;
      })
    );
  }

  function getStep(stepId) {
    return steps.find((step) => step.id === stepId);
  }

  function getSteps() {
    return steps;
  }

  function setAllSteps(steps) {
    setSteps(steps);
  }

  const value = {
    addStep,
    removeStep,
    updateStep,
    getStep,
    getSteps,
    setAllSteps,
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}
