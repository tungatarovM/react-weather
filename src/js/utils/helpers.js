const monthMap = {
  0: 'Январь',
  1: 'Февраль',
  2: 'Март',
  3: 'Апрель',
  4: 'Май',
  5: 'Июнь',
  6: 'Июль',
  7: 'Август',
  8: 'Сентябрь',
  9: 'Октябрь',
  10: 'Ноября',
  11: 'Декабрь'
}

const weekdayMap = {
  0: 'Воскресенье',
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота'
}

export const getDate = (dateStr) => {
  const date = new Date(dateStr);
  const monthName = monthMap[date.getMonth()];
  const weekdayName = weekdayMap[date.getDay()];
  const day = date.getDate();
  return {
    month: monthName,
    weekday: weekdayName,
    day: day
  }
}
