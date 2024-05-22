import ResIcon from './ResIcon'
import Cost from './Cost'


function Action({ order: { trigger, march, attack, shield, action, casualty, description } }) {
  return (
    <div className="action">
      <div className="action-trigger">
        {trigger && (
            <><Cost cost={trigger} /> &nbsp; :</>
          )
        }
      </div>
      <div className="cost">
        <ResIcon amount={march} id="m" />
        <ResIcon amount={attack} id="at" />
        <ResIcon amount={shield} id="d" />
        <ResIcon amount={action} id="ac" />
        <ResIcon amount={casualty} id="c" />
      </div>
      <div>{description}</div>
    </div>
  );
}

export default Action;
