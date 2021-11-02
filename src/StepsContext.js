import React, { useContext, useState, useEffect, createContext } from "react";

const StepContext = createContext();

export function useSteps() {
  return (context = useContext(StepContext));
}

export function StepsProvider({ children }) {
  const [allSteps, setAllSteps] = useState([]);

  function addStep(step) {
    setAllSteps((allSteps) => [...allSteps, step]);
  }

  function removeStep(stepId) {
    setAllSteps((allSteps) => allSteps.filter((step) => step.id !== stepId));
  }

  function updateStep(stepId, newStep) {
    setAllSteps((allSteps) =>
      allSteps.map((step) => {
        if (step.id === stepId) {
          return { ...step, ...newStep };
        }
        return step;
      })
    );
  }

  function getStep(stepId) {
    return allSteps.find((step) => step.id === stepId);
  }

  function getSteps() {
    return allSteps;
  }

  const value = {
    allSteps,
    addStep,
    removeStep,
    updateStep,
    getStep,
    getSteps,
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}
