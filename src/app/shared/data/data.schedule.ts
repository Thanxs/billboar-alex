import * as moment from 'moment';
import { Constants } from '../constants';

export const scheduleDates = (date: string): Array<string> => {
  const startDate = moment(date);
  let nextDate = startDate.add(Constants.RANGE_DATE, 'days');

  const dates = [];

  do {
    dates.push(nextDate.format('YYYY-MM-DD'));
    nextDate = nextDate.add(Constants.RANGE_DATE, 'days');
  } while (nextDate < moment());

  if (nextDate >= moment()) {
    dates.push(moment().format('YYYY-MM-DD'));
  }

  return dates;
};

export const innerData = (): Array<any> => {
  const data = [];
  scheduleDates('2020-04-05').forEach(() => {
    data.push(parseInt((Math.random() * Constants.MILLION).toFixed()));
  });

  return data;
};
