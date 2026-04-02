export default function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}