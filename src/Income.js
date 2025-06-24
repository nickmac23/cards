function Income({ income }) {
  return (
    <>
      {
        income && (
          <div className="income_container">
            <div className="income">{income}</div>
          </div>
        )
      }
    </>
  );
}

export default Income;
