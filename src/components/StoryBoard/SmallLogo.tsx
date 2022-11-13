import React, { useEffect, useState } from 'react';
import useScroll from '../../hooks/useScroll';
import { logo } from '../../assets/image';

const timeSlot = 0.9;
const start = 0.4;
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
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        visibility: isVisible ? 'visible' : 'hidden',
        display: 'flex',
        zIndex: '30',
      }}
    >
      <div>
        <div>
          <img
            style={{ width: '15%', height: '100%', transform: 'scale(0.7)' }}
            src={logo}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
export default Comp;
