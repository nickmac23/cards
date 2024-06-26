import ResIcon from './ResIcon'


function Cost({ cost: { mis, wheat, game, stone, ore, lumber } }) {
  return (
    <>
      <ResIcon amount={mis} />
      <ResIcon amount={lumber} id="l" />
      
      <ResIcon amount={wheat} id="w" />
      <ResIcon amount={game} id="g" />
      <ResIcon amount={stone} id="s" />
      <ResIcon amount={ore} id="o" />
    </>
  );
}

export default Cost;
