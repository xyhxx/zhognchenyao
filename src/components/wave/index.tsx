import './index.css';
import {FC} from 'react';
import classnames from 'classnames';

type Props = {
  type: 'paint' | 'plain';
  depth: '100' | '80' | '60' | '50' | '40' | '30' | '20' | '10';
};

const Wave: FC<Props> = function ({type, depth}) {
  return <div className={classnames('wave', type, `depth-${depth}`)} />;
};

export default Wave;
