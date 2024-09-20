const Items = ({ value, label }) => (
  <div className="flex flex-col items-center border-r border-[#281870] last:border-r-0 px-4">
    <span className="text-5xl font-semibold text-[#281870]">{value}</span>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

const Badge = () => {
  const stats = [
    { value: '197', label: 'Countries & Territories' },
    { value: '9M+', label: 'Members worldwide' },
    { value: '50k+', label: 'Partners Worldwide' },
  ];

  return (
    <div className="flex justify-center items-center bg-white py-10">
      {stats.map((stat, index) => (
        <Items key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default Badge;