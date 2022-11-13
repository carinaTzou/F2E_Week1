import React, { useEffect, useState } from 'react';
import useScroll from '../../hooks/useScroll';
import { character_dog } from '../../assets/image';

const timeSlot = 0.3;
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
        position: 'fixed',
      }}
    >
      <img
        style={{ width: '50%', display: 'flex' }}
        src={character_dog}
        alt="logo_text"
      />
    </div>
  );
}
export default Comp;
