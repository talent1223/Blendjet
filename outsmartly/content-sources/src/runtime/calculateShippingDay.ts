const transitTime = 1; // US ARRIVAL DATE
const cutoffHour = 15; //3PM cutoff time
const timezoneOffset = new Date().getTimezoneOffset() / 60 - 8; //users offset from PST
const locale = 'en-US';
const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
};

export function calculateShippingDay(
  shippingDate?: string,
  shippingOffset?: number,
) {
  var now = new Date();
  now.setDate(now.getDate());
  now.setHours(16);
  now.setMinutes(0);
  now.setMilliseconds(0);
  let calculated = businessDaysFromDate(now, transitTime);
  if (shippingDate && !isDateBeforeToday(new Date(shippingDate))) {
    calculated = new Date(shippingDate);
  } else if (shippingOffset) {
    const dateWithOffset = businessDaysFromDate(
      now,
      transitTime,
      shippingOffset,
    );
    if (!isDateBeforeToday(dateWithOffset)) {
      calculated = dateWithOffset;
    }
  }
  return calculated.toLocaleString(locale, options);
}

function isDateBeforeToday(date: Date) {
  return new Date(date.toDateString()) < new Date(new Date().toDateString());
}

function businessDaysFromDate(
  date: Date,
  businessDays: number,
  offset: number = 0,
) {
  var counter = 0;
  var tmp = new Date(date);
  while (businessDays >= 0) {
    tmp.setTime(date.getTime() + counter * 86400000);
    if (isBusinessDay(tmp)) {
      --businessDays;
    }
    ++counter;
  }
  if (offset) {
    tmp.setDate(tmp.getDate() + offset);
    while (!isBusinessDay(tmp)) {
      tmp.setDate(tmp.getDate() + 1);
    }
  }
  return tmp;
}

function isBusinessDay(date: Date) {
  var dayOfWeek = date.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    // Sunday or Saturday
    return false;
  }

  let holidays = [
    '12/31+5', // New Year's Day on a Saturday celebrated on previous Friday
    '1/1', // New Year's Day
    '1/2+1', // New Year's Day on a Sunday celebrated on next Monday
    '1-3/1', // Birthday of Martin Luther King, third Monday in January
    '2-3/1', // Washington's Birthday, third Monday in February
    '5~1/1', // Memorial Day, last Monday in May
    '7/3+5', // Independence Day
    '7/4', // Independence Day
    '7/5+1', // Independence Day
    '9-1/1', // Labor Day, first Monday in September
    '10-2/1', // Columbus Day, second Monday in October
    '11/10+5', // Veterans Day
    '11/11', // Veterans Day
    '11/12+1', // Veterans Day
    '11-4/4', // Thanksgiving Day, fourth Thursday in November
    '12/24+5', // Christmas Day
    '12/25', // Christmas Day
    '12/26+1', // Christmas Day
  ];

  var dayOfMonth = date.getDate(),
    month = date.getMonth() + 1,
    monthDay = month + '/' + dayOfMonth;

  if (holidays.indexOf(monthDay) > -1) {
    return false;
  }

  var monthDayDay = monthDay + '+' + dayOfWeek;
  if (holidays.indexOf(monthDayDay) > -1) {
    return false;
  }

  var weekOfMonth = Math.floor((dayOfMonth - 1) / 7) + 1,
    monthWeekDay = month + '-' + weekOfMonth + '/' + dayOfWeek;
  if (holidays.indexOf(monthWeekDay) > -1) {
    return false;
  }

  var lastDayOfMonth = new Date(date);
  lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
  lastDayOfMonth.setDate(0);
  var negWeekOfMonth =
      Math.floor((lastDayOfMonth.getDate() - dayOfMonth - 1) / 7) + 1,
    monthNegWeekDay = month + '~' + negWeekOfMonth + '/' + dayOfWeek;
  if (holidays.indexOf(monthNegWeekDay) > -1) {
    return false;
  }

  return true;
}
