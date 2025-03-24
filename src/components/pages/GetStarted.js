import StepOne from "../../components/Onboarding/StepOne";
import StepTwo from "../../components/Onboarding/StepTwo";
import StepThree from "../../components/Onboarding/StepThree";
import ProgressIndicator from "../../components/Onboarding/ProgressIndicator";
import "../styles/Onboarding.css";




const GetStarted = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="onboarding-container">
      <ProgressIndicator step={step} />
      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <StepThree prevStep={prevStep} />}
    </div>
  );
};

export default GetStarted;
