const ITEMS = [
  '🎉 Pay Full Fees & Get 10% OFF',
  '📜 Private Certificate — FREE of Cost',
  '🏛️ Govt. Certificate @ ₹1,500/-',
  '📞 Sachin Garg: 9810994450',
  '📞 Pooja Garg: 9999105540',
  '📍 Narela, Delhi – 110040',
  '🚀 Admissions Open — Limited Seats!',
  '💡 20+ Courses Available',
];

export default function Ticker() {
  return (
    <div
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60, overflow: 'hidden' }}
      className="bg-gradient-to-r from-blue-700 via-blue-600 to-violet-700 py-2"
    >
      <div className="ticker-inner">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="text-white text-xs font-bold tracking-wide flex-shrink-0 px-2">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
