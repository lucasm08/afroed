import { types } from 'pg';
import { format } from 'date-fns';

export const configurePostgres = () => {
  // Don't parse dates to js Date() objects
  types.setTypeParser(1082, 'text', (val: any) => val);

  // Don't parse timestamps to js Date() objects, but just ISO8601 strings
  types.setTypeParser(1184, (val: any) => {
    if (val === null) {
      return null;
    }
    return format(val, 'YYYY-MM-DDTHH:mm:ss.sssZ');
  });
};
