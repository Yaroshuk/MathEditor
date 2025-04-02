import { TokenFormat, TokenType } from "./types";
import ParserState from "./state";
import { Codes, consumeNumbers } from "./utils";

export default function parseFormula(state: ParserState): boolean {
    const { pos } = state;
    if (state.options.formula) {
        if (state.consume(Codes.Dollar)) {
            console.log("PARSEFORMULE", state);
            if (consumeFormula(state) && state.consume(Codes.Dollar)) {
                const value = state.substring(pos);
                console.log("READER", state, value);
                // if (state.consume(Codes.Dollar)) {
                // Разрешаем поглотить самостоятельный символ `@`, чтобы показывать
                // его в редакторе и при необходимости вывести автокомплит

                const random = state.push({
                    type: TokenType.Formula,
                    format: TokenFormat.None,
                    value: value,
                    id: Math.random().toString(36).substring(7),
                });
            }
            return true;
        }

        state.pos = pos;
    }
    // }

    return false;
}

function consumeFormula(state: ParserState): boolean {
    return state.consumeWhile((ch) => {
        console.log("CH", ch);
        return ch !== Codes.Dollar;
    });
}
