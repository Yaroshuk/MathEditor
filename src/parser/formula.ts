import { TokenFormat, TokenType } from "./types";
import type ParserState from "./state";
import { Codes } from "./utils";

export default function parseFormula(state: ParserState): boolean {
    const { pos } = state;
    if (state.options.formula) {
        if (state.consume(Codes.Slash)) {
            console.log("parseFormula", state);
            // if (state.consume(Codes.Dollar)) {
            // Разрешаем поглотить самостоятельный символ `@`, чтобы показывать
            // его в редакторе и при необходимости вывести автокомплит
            state.push({
                type: TokenType.Formula,
                format: TokenFormat.None,
                value: `$(x+7)^2+6(x^2-10)$`,
                id: "123",
            });
            return true;
        }

        state.pos = pos;
    }
    // }

    return false;
}
