import React, { useEffect, useState } from 'react';
import { character_cat, character_dog, pig } from '../../assets/image';
import useScroll from '../../hooks/useScroll';

const timeSlot = 0.3;
function Comp() {
  const { progress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [delta, setDelta] = useState(0);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    // 分鏡長度~0~0.3
    // 期間大小由大到小, 超過0.3畫面消失
    setIsVisible(progress <= timeSlot);
    setDelta(1 / timeSlot);
    getScale(progress);
  }, [progress]);
  const getScale = (value: number) => {
    if (value >= 0.35 && value < 0.85) {
      setScale(0.5);
    } else if (value >= 0.85) {
      setScale(0.65);
    } else {
      setScale(1);
    }
  };
  return (
    <div
      className="uuu"
      style={{
        position: 'fixed',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        bottom: scale ? '-50px' : '10px',
        zIndex: '10',
        transform: `scale(${scale})`,
      }}
    >
      <div className="test">
        <img src={character_dog} alt="logo_text" style={{ width: '80%' }} />
      </div>
      <div className="test2">
        <img src={character_cat} alt="logo_text" style={{ width: '80%' }} />
      </div>
      <div className="test3">
        <img src={pig} alt="logo_text" style={{ width: '80%' }} />
      </div>
    </div>
  );
}
export default Comp;
