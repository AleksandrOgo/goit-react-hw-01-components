// import {
//   StatisticSection,
//   StatisticTitle,
//   StatisticList,
//   StatisticListItem,
//   StatisticLabel,
//   StatisticPercentage,
// } from './Statistics.styled.js';
const randColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

export const Statistics = ({ title, stats }) => {
  return (
    <section>
  {title && (
        <h2>{title}</h2>
      )}

  <ul>
              {stats.map(({ id, label, percentage }) => (
                  <li key={id} style={{ backgroundColor: randColor() }}>
                      <span>{label}</span>
                      <span>{percentage}%</span>
    </li>
))}
  </ul>
</section>
  )
}
