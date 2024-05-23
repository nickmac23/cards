import MarchIcon from './icons/MarchIcon'
import AttackIcon from './icons/AttackIcon'
import ShieldIcon from './icons/ShieldIcon'
import ActionIcon from './icons/ActionIcon'
import GrainIcon from './icons/GrainIcon'
import OreIcon from './icons/OreIcon'
import GameIcon from './icons/GameIcon'
import StoneIcon from './icons/StoneIcon'
import LumberIcon from './icons/LumberIcon'
import CasualtyIcon from './icons/CasualtyIcon'
import GatherIcon from './icons/GatherIcon'


const IconMap = ({id}) => {
  if(id === "w") return <GrainIcon />
  if(id === "o") return <OreIcon />
  if(id === "g") return <GameIcon />
  if(id === "s") return <StoneIcon />
  if(id === "l") return <LumberIcon />

  if(id === "ac") return <ActionIcon />
  if(id === "m") return <MarchIcon />
  if(id === "d") return <ShieldIcon />
  if(id === "at") return <AttackIcon />
  if(id === "c") return <CasualtyIcon />
  if(id === "ga") return <GatherIcon />
}

function ResIcon({amount = 0, id}) {
  if (amount === 0) {
    return null
  }
  if (amount === "x") {
    return (
      <div className='cost-icon'>
        <IconMap id={id} />
        <div className='test'>X</div>
      </div>
    )
  }
  if (id) {
    return [...Array(amount)].map((k, i) =>(
      <div className='cost-icon'>
        <IconMap id={id} key={`${id}_${i}`} />
      </div>
    ))
  }
  return (
    <div className='cost-icon'>
      <div className="cost-icon">{amount}</div>
    </div>
  )
}


export default ResIcon
