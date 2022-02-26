import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CommonButton from "./CommonButton";



const ProgressStepper = ({ steps, stepDescription }) => {
  const [activeSteps, setActiveSteps] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = steps.length;
  const completedSeteps = Object.keys(completed).length;
  const AllCompletedSeteps = completedSeteps === totalSteps;

  const handleBack = () => {
    const newCompleted = {...completed};
    delete newCompleted[activeSteps]
    setCompleted(newCompleted);
    setActiveSteps((p) => p - 1);
  };

  const handleNext = () => {
    const newCompleted = {...completed};
    newCompleted[activeSteps] = true;
    setCompleted(newCompleted);
    setActiveSteps((p) => p + 1);
  };


  const handleReset = () => {
    setCompleted({});
    setActiveSteps(0);
  };

  return (
    <Box sx={{width: `100%`, padding: 2}}>
      <Stepper activeStep={activeSteps}>
        {steps.map((step, ind) => (
          <Step key={step} completed={completed[ind]}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {AllCompletedSeteps ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed</Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: `center` }}
          >
            <CommonButton variant="contained" onClick={handleReset}>
                Reset
            </CommonButton>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>{stepDescription[activeSteps]}</Typography>
          <Box 
            sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: `space-between` }}
          >
            <CommonButton
                variant="contained"
                disabled={activeSteps === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
            >
                Back
            </CommonButton>
            <Box sx={{flex: '1 1 auto' }} />
                <CommonButton variant="contained" onClick={handleNext}>
                    {completedSeteps === totalSteps - 1 ? `Finish` : `Next`}
                </CommonButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProgressStepper;
