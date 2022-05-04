import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";

const Bar = () => {
  return (
    <div className="flex items-center justify-around mt-6">
      <div className="w-64 h-64 bg-gray-100 flex flex-col items-center justify-center">
        <CircularProgress size="100px" color="purple" value={85}>
          <CircularProgressLabel>85%</CircularProgressLabel>
        </CircularProgress>
        <p className="text-md">Storage Fill</p>
      </div>
      <div className="w-64 h-64 bg-gray-100 flex flex-col items-center justify-center">
        <CircularProgress size="100px" color="purple" value={85}>
          <CircularProgressLabel>85%</CircularProgressLabel>
        </CircularProgress>
        <p className="text-md">Storage Fill</p>
      </div>
    </div>
  );
};

export default Bar;
