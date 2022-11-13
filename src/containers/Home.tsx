/* eslint-disable react/function-component-definition */
import React from 'react';
import Button from '../components/StoryBoard/Button';
import Card from '../components/StoryBoard/Card';
import CharacterCat from '../components/StoryBoard/CharacterCat';
import Cloud from '../components/StoryBoard/Cloud';
import Content from '../components/StoryBoard/Content';
import Logo from '../components/StoryBoard/Logo';
import Question from '../components/StoryBoard/Question';
import ReadyFrame from '../components/StoryBoard/ReadyFrame';
import Road from '../components/StoryBoard/Road';
import RoadSideTree from '../components/StoryBoard/RoadSideTree';
import SmallLogo from '../components/StoryBoard/SmallLogo';
import Start from '../components/StoryBoard/Start';
import useScroll from '../hooks/useScroll';

const Home: React.FC<any> = () => {
  const { scrollTop } = useScroll();
  const { progress } = useScroll();
  return (
    <div
      style={{
        height: '1000vh',
        overflow: 'show',
        position: 'relative',
        display: 'flex',
        backgroundColor: '#FFC37D',
      }}
    >
      <div
        style={{
          top: '10x',
          right: '10px',
          position: 'fixed',
        }}
      >
        {progress}
      </div>
      <Start />
      <Logo />
      <CharacterCat />
      <Road />
      <Cloud />
      <SmallLogo />
      <ReadyFrame />
      <RoadSideTree />
      <Question />
      <Card />
      <Button />
      <Content />
      {/* <Cloud />
      <ReadyFrame />
      <RoadSideTree />
      <Road /> */}
    </div>
  );
};
export default Home;
