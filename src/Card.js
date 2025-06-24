import Action from './Action'
import Cost from './Cost'
import Income from './Income'


function Card({ info: { title, type, cost, order, secondary, version, income } }) {

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
        <div className='card-type'>
          <span>{type}</span>
          <span>{version}</span>
        </div>
        <Action order={order} />
        {
          secondary && (
            <Action order={secondary} />
          )
        }
      </div>
      <Income income={income}/>
    </div>
  );
}

export default Card;
