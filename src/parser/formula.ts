import { TokenFormat, TokenType } from './types';
import type ParserState from './state';
import { Codes, consumeIdentifier, isDelimiter } from './utils';

export default function parseFormula(state: ParserState): boolean {
  if (state.atWordBound()) {
    const { pos } = state;
    if (state.consume(Codes.Dollar)) {
      // Разрешаем поглотить самостоятельный символ `@`, чтобы показывать
      // его в редакторе и при необходимости вывести автокомплит
      if (isDelimiter(state.peek())) {
        state.push({
          type: TokenType.Formula,
          format: TokenFormat.None,
          value: state.substring(pos),
        });
        return true;
      }
    }

    //state.pos = pos;
  }

  return false;
}
