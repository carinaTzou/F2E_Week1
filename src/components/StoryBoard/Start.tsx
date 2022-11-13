import React, { useEffect, useState } from 'react';
import useScroll from '../../hooks/useScroll';
import { start } from '../../assets/image';

const timeSlot = 0.35;
function Comp() {
  const { progress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    // 分鏡長度~0~0.3
    // 期間大小由大到小, 超過0.3畫面消失
    setIsVisible(progress <= timeSlot);
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
        justifyContent: 'center',
        paddingLeft: '10vw',
        paddingRight: '10vw',
        zIndex: '20',
      }}
    >
      <div
        style={{
          // height: `${100 - 100 * delta * progress}%`,
          // width: `${100 - 100 * delta * progress}%`,
          justifyContent: 'space-between',
          display: 'flex',
          alignSelf: 'center',
        }}
      >
        <div
          style={{
            alignSelf: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src={start}
            alt="decorate1"
          />
        </div>
      </div>
    </div>
  );
}
export default Comp;
