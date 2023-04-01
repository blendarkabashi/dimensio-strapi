import StarBorderRounded from '@mui/icons-material/StarBorderRounded';
import StarRounded from '@mui/icons-material/StarRounded';
import { useState } from 'react';
const TechStackExperience = ({ options, className }) => {
  return (
    <div className={className}>
      <div className="flex items-center mb-2">
        <div className="w-1/3 font-medium">Tech Stack</div>
        <div className="w-2/3 font-medium">Years of Experience</div>
      </div>
      {options.map((techStack) => (
        <div className="flex items-center">
          <div className="w-1/3">{techStack.name}</div>
          <div className="w-2/3 flex items-center">
            <StarBorderRounded className="text-orange w-7 h-7 fill-orange" />
            <StarBorderRounded className="text-orange w-7 h-7" />
            <StarBorderRounded className="text-orange w-7 h-7" />
            <StarBorderRounded className="text-orange w-7 h-7" />
            <StarBorderRounded className="text-orange w-7 h-7" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackExperience;
