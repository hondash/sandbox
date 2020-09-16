import { parse } from 'querystring';

export const parseQueryToObject = (query: string) => {
  if (query.startsWith('?')) {
    return parse(query.replace('?', ''));
  }
};
