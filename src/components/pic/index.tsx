import './index.css';
import {FC} from 'react';

type Props = {
  url: string;
};
const Pic: FC<Props> = function ({url}) {
  return <div className="pic-bg" style={{backgroundImage: `url(${url})`}} />;
};

export default Pic;
