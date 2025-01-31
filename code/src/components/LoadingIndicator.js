import React from "react";
import Lottie from "react-lottie";
import animationData from '../animations/square.json'

export const LoadingIndicator = () => {
  
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

    return (

        <div>
        <Lottie 
            options={defaultOptions}
            height={275}
            width={275}
          />
        </div>
      
    
    );
  };
  