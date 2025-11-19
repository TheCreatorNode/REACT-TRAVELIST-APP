const Stat = ({ items }) => {
  if (items.length === 0) {
    return <p className="stats">Start adding stuffs to your list</p>;
  }
  const noOfItems = items.length;
  const packed = items.filter((i) => i.packed).length;
  const percentage = Math.round((packed / noOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go"
          : `You have ${noOfItems} on your list and have already packed ${packed} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stat;
