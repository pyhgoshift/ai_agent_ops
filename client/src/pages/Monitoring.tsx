import React from "react";

const Monitoring = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <video
        className="w-full h-full object-contain"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/center_monitering.mp4" type="video/mp4" />
        브라우저가 동영상을 지원하지 않습니다.
      </video>
    </div>
  );
};

export default Monitoring;
