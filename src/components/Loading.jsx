import './Loading.css';
import { TailSpin } from 'react-loader-spinner';

export default function Loading(props) {
  return (
    <div className={"loading-spinner z-50" + (!props.active ? " not-visible" : "")}>
      <div className="loading-spinner-inner">
        <TailSpin color="var(--main-color)" />
      </div>
    </div>
  )
}