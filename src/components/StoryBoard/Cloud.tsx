import React, { useEffect, useState } from 'react';
import { decorate1, decorate5 } from '../../assets/image';
import useScroll from '../../hooks/useScroll';

const timeSlot = 0.2;
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
      }}
    >
      <div
        style={{
          height: `${100 - 100 * delta * progress}%`,
          width: `${100 - 100 * delta * progress}%`,
          justifyContent: 'space-between',
          display: 'flex',
          alignSelf: 'center',
        }}
      >
        <div
          style={{
            height: '26%',
            width: '22%',
            alignSelf: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src={decorate1}
            alt="decorate1"
          />
        </div>
        <div
          style={{
            height: '26%',
            width: '22%',
            alignSelf: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '100%' }}
            src={decorate5}
            alt="decorate5"
          />
        </div>
      </div>
    </div>
  );
}
export default Comp;
