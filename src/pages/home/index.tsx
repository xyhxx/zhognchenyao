import {FC, useEffect, useRef} from 'react';
import css from './index.module.css';
import {Layer, Background, Wave, Line, Pic} from '@components';
// eslint-disable-next-line @typescript-eslint/naming-convention
import Parallax from 'parallax-js';
import pic1 from '@assets/images/pic-demo1.png';
import pic2 from '@assets/images/pic-demo2.png';
import pic from '@assets/images/demo.png';

const Home: FC = function () {
  const ref = useRef<HTMLElement>(null);

  useEffect(function () {
    const parallaxInstance = new Parallax(ref.current!);

    return function () {
      parallaxInstance.disable();
    };
  }, []);

  return (
    <main ref={ref} className={css.main}>
      <Layer depth="0.10">
        <Background />
      </Layer>
      <Layer depth="0.15">
        <Line
          depth="10"
          data={[
            {url: pic1, animate: 5, position: 4},
            {url: pic2, animate: 2, position: 5},
            {url: pic1, animate: 4, position: 8},
          ]}
        />
      </Layer>
      <Layer depth="0.30">
        <Wave type="paint" depth="30" />
      </Layer>
      <Layer depth="0.30">
        <Line
          depth="30"
          data={[
            {url: pic1, animate: 1, position: 3},
            {url: pic2, animate: 2, position: 7},
            {url: pic1, animate: 4, position: 6},
          ]}
        />
      </Layer>

      <Layer depth="0.40">
        <Wave type="plain" depth="40" />
      </Layer>
      <Layer depth="0.60">
        <Pic url={pic} />
      </Layer>
      <Layer depth="0.50">
        <Wave type="paint" depth="50" />
      </Layer>
      <Layer depth="0.60">
        <Wave type="plain" depth="60" />
      </Layer>

      <Layer depth="0.60">
        <Line
          depth="60"
          data={[
            {url: pic1, animate: 2, position: 3},
            {url: pic2, animate: 3, position: 4},
            {url: pic1, animate: 5, position: 7},
          ]}
        />
      </Layer>
      <Layer depth="0.80">
        <Wave type="plain" depth="80" />
      </Layer>
      <Layer depth="1.00">
        <Wave type="paint" depth="100" />
      </Layer>
    </main>
  );
};

export default Home;
