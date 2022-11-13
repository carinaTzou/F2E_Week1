import React, { useEffect, useState } from 'react';
import { road } from '../../assets/image';
import useScroll from '../../hooks/useScroll';

const timeSlot = 1;
function Comp() {
  const { progress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [delta, setDelta] = useState(0);
  const [scale, setScale] = useState(false);

  useEffect(() => {
    // 分鏡長度~0~0.3
    // 期間大小由大到小, 超過0.3畫面消失
    setIsVisible(progress <= timeSlot);
    setDelta(1 / timeSlot);
    getScale(progress);
  }, [progress]);
  const getScale = (value: number) => {
    if (value >= 0.35) {
      console.log('value', value);
      setScale(true);
    } else {
      setScale(false);
    }
  };
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: scale ? '60%' : '70%',
          alignSelf: 'center',
          display: 'flex',
          position: 'absolute',
          bottom: '0px',
          justifyContent: 'center',
        }}
      >
        <img style={{ width: '100%', height: '100%' }} src={road} alt="road" />
      </div>
    </div>
  );
}
export default Comp;
