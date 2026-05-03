import React from "react";

const Monitoring = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <iframe
        className="w-full h-full pointer-events-none"
        src="https://www.youtube.com/embed/Qmn_Kaf1nSs?autoplay=1&mute=1&loop=1&playlist=Qmn_Kaf1nSs&controls=0&showinfo=0&modestbranding=1"
        title="Center Monitoring"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Monitoring;
