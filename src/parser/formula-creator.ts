import { FormulaEvent, TokenFormat, TokenType } from "./types";
import type ParserState from "./state";
import { Codes, consumeNumbers } from "./utils";

export default function parseFormula(state: ParserState): boolean {
    const { pos } = state;

    if (!state.options.formula) return false;

    if (state.atWordBound()) {
        if (consumeNumbers(state) && state.consume(Codes.Slash)) {
            console.log("FORMULA_CREATOR", state);
            // if (state.consume(Codes.Dollar)) {
            // Разрешаем поглотить самостоятельный символ `@`, чтобы показывать
            // его в редакторе и при необходимости вывести автокомплит
            state.push({
                type: TokenType.Formula,
                format: TokenFormat.None,
                value: `$(x+7)^2+6(x^2-10)$`,
                event: FormulaEvent.Create,
                id: Math.random().toString(36).substring(7),
            });
            return true;
        }

        state.pos = pos;
    }

    if (state.atWordBound()) {
        if (consumeNumbers(state) && consumeMathOperator(state)) {
            console.log("FORMULA_CREATOR", state);
            // if (state.consume(Codes.Dollar)) {
            // Разрешаем поглотить самостоятельный символ `@`, чтобы показывать
            // его в редакторе и при необходимости вывести автокомплит
            state.push({
                type: TokenType.Formula,
                format: TokenFormat.None,
                value: `$(x+7)^2+6(x^2-10)$`,
                event: FormulaEvent.Create,
                id: Math.random().toString(36).substring(7),
            });
            return true;
        }

        state.pos = pos;
    }
    // }

    return false;
}

function consumeMathOperator(state: ParserState) {
    return state.consume((ch) => {
        return (
            ch === Codes.Plus ||
            ch === Codes.Hyphen ||
            ch === Codes.Asterisk ||
            ch === Codes.Slash
        );
    });
}
