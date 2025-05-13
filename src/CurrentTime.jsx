import React, { useState, useEffect } from "react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  // Format the current date and time
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <div className="dark:text-white text-black font-bold  text-lg flex flex-col items-center">
      <div className="text-xl">{formattedDate}</div> 
      <div>{formattedTime}</div>
    </div>
  );
}

export default CurrentTime;
