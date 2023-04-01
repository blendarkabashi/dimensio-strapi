import Button from 'components/button';

const MultiStepForm = ({
  steps,
  currentStep,
  setCurrentStep,
  children,
  nextStep,
}) => {
  const completedStep = (step) => {
    return (
      <a
        href={step.href}
        className="group flex flex-col border-l-4 border-blue py-2 pl-4 hover:text-blue md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
      >
        <span className="text-sm font-medium text-blue group-hover:text-blue">
          {step.id}
        </span>
        <span className="text-sm font-medium">{step.name}</span>
      </a>
    );
  };
  const activeStep = (step) => {
    return (
      <a
        href={step.href}
        className="flex flex-col border-l-4 border-blue py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
        aria-current="step"
      >
        <span className="text-sm font-medium text-blue">{step.id}</span>
        <span className="text-sm font-medium">{step.name}</span>
      </a>
    );
  };
  const initialStep = (step) => {
    return (
      <a
        href={step.href}
        className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
      >
        <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
          {step.id}
        </span>
        <span className="text-sm font-medium">{step.name}</span>
      </a>
    );
  };
  return (
    <>
      <nav aria-label="Progress" className="mb-10">
        <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="md:flex-1">
              {step.completed
                ? completedStep(step)
                : step.id === currentStep
                ? activeStep(step)
                : initialStep(step)}
            </li>
          ))}
        </ol>
      </nav>
      {children}
      <div className="flex items-center justify-between">
        <div>
          {currentStep != steps.length + 1 && currentStep != 1 && (
            <Button onClick={() => setCurrentStep(currentStep - 1)}>
              Previous Step
            </Button>
          )}
        </div>
        <div>
          {currentStep != steps.length + 1 && (
            <Button
              className="w-full"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next Step
            </Button>
          )}
          {currentStep == steps.length + 1 && (
            <Button loading={loading}>Submit</Button>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;

/////////////
