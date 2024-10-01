import React, { useState } from 'react';
import SelectView from './SelectView';
import ManagePermissions from './ManagePermissions';
import AddTasks from './AddTasks';
import AddTeam from './AddTeam';
import CreateProject from './CreateProject';
import ProjectType from './ProjectType';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 0: 
    return <CreateProject nextStep={nextStep}/>;
    case 1:
      return <SelectView nextStep={nextStep} prevStep={prevStep}/>;
    case 2:
      return <ProjectType nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <ManagePermissions nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <AddTasks nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <AddTeam nextStep={nextStep} prevStep={prevStep} />;
    default:
      return < CreateProject nextStep={nextStep} />;
  }
};

export default MultiStepForm;
