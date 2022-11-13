import React, { useEffect, useState } from 'react';
import useScroll from '../../hooks/useScroll';

const timeSlot = 0.65;
const start = 0.35;
function Comp() {
  const { progress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    // 分鏡長度~0~0.3
    // 期間大小由大到小, 超過0.3畫面消失
    setIsVisible(progress <= timeSlot && progress >= start);
    setDelta(1 / timeSlot);
  }, [progress]);
  return (
    <div
      className="yyy"
      style={{
        position: 'fixed',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        zIndex: '10',
        top: '30px',
        color: '#007FAB',
        fontSize: '30pt',
        visibility: isVisible ? 'visible' : 'hidden',
      }}
    >
      <h1
        style={{
          color: '#007FAB',
        }}
        className="animated bounce infinite"
      >
        {/* <div>
          <img
            src={bg_talking_l}
            alt="logo"
            style={{
              width: '10%',
              height: '50%',
            }}
          />
        </div>
        <div>
          <img
            src={bg_talking_c}
            alt="logo"
            style={{
              width: '20%',
              height: '50%',
            }}
          />
        </div>
        <div>
          <img
            src={bg_talking_r}
            alt="logo"
            style={{
              width: '10%',
              height: '50%',
            }}
          />
        </div> */}
        你是否也有以下困擾？
      </h1>
    </div>
  );
}
export default Comp;
