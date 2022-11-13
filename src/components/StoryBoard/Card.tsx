import 'animate.css';
import React, { useEffect, useState } from 'react';
import { q_1, q_2, q_3 } from '../../assets/image';
import useScroll from '../../hooks/useScroll';

const timeSlot = 0.65;
const start = 0.4;
function Comp() {
  const { progress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [delta, setDelta] = useState(0);
  const [scale, setScale] = useState(false);
  useEffect(() => {
    // 分鏡長度~0~0.3
    // 期間大小由大到小, 超過0.3畫面消失
    setIsVisible(progress <= timeSlot && progress >= start);
    setDelta(1 / timeSlot);
    getScale(progress);
  }, [progress]);
  const getScale = (value: number) => {
    if (value >= 0.35) {
      setScale(true);
    } else {
      setScale(false);
    }
  };
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        zIndex: '100',
        top: '200px',
        visibility: isVisible ? 'visible' : 'hidden',
      }}
    >
      <div
        style={{
          position: 'fixed',
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: '100',
          top: '120px',
        }}
      >
        <div
          key="amache"
          className={
            progress > 0.4 ? 'animate__animated animate__slideInLeft' : ''
          }
          style={{
            visibility:
              progress > 0.4 && progress < timeSlot ? 'visible' : 'hidden',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              className="text"
              style={{ color: '#FF5136', fontSize: '18px' }}
            >
              羨慕別人的酷酷的網頁動畫？
            </div>
            <div>
              <img
                src={q_1}
                alt="logo_text"
                style={{
                  width: '60%',
                }}
              />
            </div>
          </div>
        </div>

        <div
          key="amache"
          style={{
            visibility:
              progress > 0.5 && progress < timeSlot ? 'visible' : 'hidden',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#FF5136', fontSize: '18px' }}>
              滿足不了同事的許願？
            </div>
            <img src={q_2} alt="logo_text" style={{ width: '60%' }} />
          </div>
        </div>
        <div
          key="amache"
          className={
            progress > 0.6 ? 'animate__animated animate__slideInRight' : ''
          }
          style={{
            visibility:
              progress > 0.6 && progress < timeSlot ? 'visible' : 'hidden',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#FF5136', fontSize: '18px' }}>
              動畫技能樹太雜無從下手？
            </div>
            <img src={q_3} alt="logo_text" style={{ width: '60%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comp;
