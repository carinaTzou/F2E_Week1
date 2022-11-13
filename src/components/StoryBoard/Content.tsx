import 'animate.css';
import React, { useEffect, useState } from 'react';
import { week_1, week_2, week_3 } from '../../assets/image';
import useScroll from '../../hooks/useScroll';

const timeSlot = 0.85;
const start = 0.75;
function Comp() {
  const { progress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [delta, setDelta] = useState(0);
  const [top, setTop] = useState(0);
  useEffect(() => {
    // 分鏡長度~0~0.3
    // 期間大小由大到小, 超過0.3畫面消失
    setIsVisible(progress <= timeSlot && progress >= start);
    setDelta(1 / timeSlot);
    console.log(75 - 1500 * (0.75 - progress));
  }, [progress]);

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: '100',
        width: '100%',
        bottom: `${75 - 1500 * (0.85 - progress)}%`,
      }}
    >
      <div>
        <div style={{ padding: '50px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              visibility:
                progress >= start && progress < 0.81 ? 'visible' : 'hidden',
              opacity: progress >= 0.78 ? 0.1 : 1,
            }}
          >
            <img src={week_1} alt="logo_text" style={{ width: '30%' }} />
            <div>
              <div style={{ color: '#FF5136', fontSize: '3em' }}>WEEK1</div>
              <div style={{ color: '#007FAB', fontSize: '2em' }}>
                The F2E 活動網站設計 `
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '50px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              visibility:
                progress >= start && progress < 0.88 ? 'visible' : 'hidden',
              opacity: progress >= 0.8 ? 0.1 : 1,
            }}
          >
            <div>
              <div style={{ color: '#FF5136', fontSize: '3em' }}>WEEK2</div>
              <div style={{ color: '#007FAB', fontSize: '2em' }}>
                今晚，我想來點點簽
              </div>
            </div>
            <img src={week_2} alt="logo_text" style={{ width: '30%' }} />
          </div>
        </div>
        <div style={{ padding: '50px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              visibility:
                progress >= start && progress < 0.88 ? 'visible' : 'hidden',
              opacity: progress >= 0.83 ? 0.1 : 1,
            }}
          >
            <img src={week_3} alt="logo_text" style={{ width: '30%' }} />
            <div>
              <div style={{ color: '#FF5136', fontSize: '3em' }}>WEEK2</div>
              <div style={{ color: '#007FAB', fontSize: '2em' }}>
                Scrum 新手村
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comp;
