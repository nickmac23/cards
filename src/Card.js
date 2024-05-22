import Action from './Action'
import Cost from './Cost'
import ResIcon from './ResIcon'


function Card({ info: { title, cost, order, secondary, version } }) {

  return (
    <div className="card">
      <div className="card-header">
        <div>{title}</div>
        <div className="cost">
          <Cost cost={cost} />
        </div>
      </div>
      <div className="card-main">
        <div className="card-pic" />
        <Action order={order} />
        {
          secondary && (
            <Action order={secondary} />
          )
        }
      </div>
      <div className='card-version'>{version}</div>
    </div>
  );
}

export default Card;
