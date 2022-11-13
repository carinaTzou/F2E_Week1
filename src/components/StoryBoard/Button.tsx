import 'animate.css';
import React, { useEffect, useState } from 'react';
import { btn_join } from '../../assets/image';
import useScroll from '../../hooks/useScroll';

const timeSlot = 0.75;
const start = 0.68;
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
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: '100',
          top: '100px',
        }}
      >
        <div key="amache">
          <div style={{ textAlign: 'center' }}>
            <div>
              <img
                src={btn_join}
                alt="logo_text"
                style={{
                  width: '60%',
                }}
              />
            </div>
            <div
              className="text"
              style={{ color: '#007FAB', fontSize: '18px' }}
            >
              前端工程師
            </div>
          </div>
        </div>

        <div key="amache">
          <div style={{ textAlign: 'center' }}>
            <img src={btn_join} alt="logo_text" style={{ width: '60%' }} />
            <div style={{ color: '#007FAB', fontSize: '18px' }}>UI設計師</div>
          </div>
        </div>
        <div key="amache">
          <div style={{ textAlign: 'center' }}>
            <img src={btn_join} alt="logo_text" style={{ width: '60%' }} />
            <div style={{ color: '#007FAB', fontSize: '18px' }}>
              團體組(UI+前端)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comp;
