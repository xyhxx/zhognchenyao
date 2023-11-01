import './index.css';
import {FC} from 'react';
import line from '@assets/images/line.png';
import classNames from 'classnames';

type Props = {
  depth: '10' | '30' | '60';
  data: {
    url: string;
    animate: 1 | 2 | 3 | 4 | 5;
    position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  }[];
};

const Line: FC<Props> = function ({depth, data}) {
  return (
    <ul className={classNames('line', `depth-${depth}`)}>
      <li>
        <img src={line} />
      </li>
      {data.map(function ({url, animate, position}, idx) {
        return (
          <li
            key={idx}
            className={classNames('hanger', `position-${position}`)}
          >
            <div
              className={classNames('pic', `swing-${animate}`)}
              style={{backgroundImage: `url(${url})`}}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Line;
