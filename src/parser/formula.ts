import { TokenFormat, TokenType } from './types';
import type ParserState from './state';
import { Codes } from './utils';

export default function parseFormula(state: ParserState): boolean {
  const { pos } = state;

  if (state.consumeLog(Codes.Dollar)) {
    // if (state.consume(Codes.Dollar)) {
    // Разрешаем поглотить самостоятельный символ `@`, чтобы показывать
    // его в редакторе и при необходимости вывести автокомплит
    state.push({
      type: TokenType.Formula,
      format: TokenFormat.None,
      value: '$',
    });
    state.pushFormula({
      type: TokenType.Text,
      format: TokenFormat.None,
      value: ' ',
    });

    //state.pos = pos;

    return true;
    // }
  }

  return false;
}
