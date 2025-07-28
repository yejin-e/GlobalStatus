const NextButtton = () => {
  return (
    <button onClick={() => {
      navigate(`/detail/${numberId - 1}`);
    }} />
  )
}

export default NextButtton;
