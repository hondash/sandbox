import { parse, ParsedUrlQuery } from 'querystring';

const parseQueryToObject = (query: string): ParsedUrlQuery => {
  if (query.startsWith('?')) {
    return parse(query.replace('?', ''));
  }
  return parse(query);
};

interface ExpectedQuery {
  aaa: string;
  bbb: number;
}

const query = 'aaa=hoge';
const obj = parseQueryToObject(query);

const { aaa, bbb } = {
  aaa: typeof obj.aaa === 'string' ? obj.aaa : undefined,
  bbb:
    typeof obj.bbb === 'string' && !Number.isNaN(parseInt(obj.bbb))
      ? parseInt(obj.bbb)
      : undefined,
} as ExpectedQuery;

console.log(aaa, bbb);
