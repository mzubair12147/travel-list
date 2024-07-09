export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.reduce((_, item) => _ + item.packed, 0);
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go. ✈️"
          : `You have ${numItems} iems on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
