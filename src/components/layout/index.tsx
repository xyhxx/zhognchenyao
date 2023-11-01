import './index.css';
import {CSSProperties, FC, PropsWithChildren} from 'react';

type Props = {
  depth: string;
  style?: CSSProperties;
};

const Layer: FC<PropsWithChildren<Props>> = function ({
  children,
  depth,
  style,
}) {
  return (
    <section className="layer" data-depth={depth} style={style}>
      {children}
    </section>
  );
};

export default Layer;
