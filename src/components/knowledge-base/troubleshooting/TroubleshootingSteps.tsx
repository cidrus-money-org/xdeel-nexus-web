
interface TroubleshootingStepsProps {
  steps: {
    title: string;
    description: string;
  }[];
}

export const TroubleshootingSteps = ({ steps }: TroubleshootingStepsProps) => {
  return (
    <div className="space-y-6 mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 bg-xdeel-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
            {index + 1}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-xdeel-gray">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
