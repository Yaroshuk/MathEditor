import { FormulaEvent, TokenFormat, TokenType } from "./types";
import type ParserState from "./state";
import { Codes, consumeNumbers, isWhitespace } from "./utils";
import type { Selector } from "mathlive";

export default function parseFormula(state: ParserState): boolean {
    const { pos } = state;

    if (!state.options.formula) return false;

    if (isWhitespace(state.peekPrev())) {
        if (state.consume(Codes.BackSlash)) {
            console.log("FORMULA_CREATOR SLASH", state, state.atWordBound());
            // if (state.consume(Codes.Dollar)) {
            // Разрешаем поглотить самостоятельный символ `@`, чтобы показывать
            // его в редакторе и при необходимости вывести автокомплит
            state.push({
                type: TokenType.Formula,
                format: TokenFormat.None,
                value: transformFormulaInput(),
                event: FormulaEvent.Create,
                id: Math.random().toString(36).substring(7),
            });
            return true;
        }
    }

    state.pos = pos;

    if (state.atWordBound()) {
        if (consumeNumbers(state) && consumeMathOperator(state)) {
            console.log("FORMULA_CREATOR", state, state.atWordBound());
            const value = state.substring(pos);

            // if (state.consume(Codes.Dollar)) {
            // Разрешаем поглотить самостоятельный символ `@`, чтобы показывать
            // его в редакторе и при необходимости вывести автокомплит
            state.push({
                type: TokenType.Formula,
                format: TokenFormat.None,
                value: transformFormulaInput(value),
                event: FormulaEvent.Create,
                id: Math.random().toString(36).substring(7),
                command: getFormulaPlaceholder(value),
            });
            return true;
        }

        state.pos = pos;
    }

    return false;
}

function getFormulaPlaceholder(value?: string) {
    if (!value) return;

    const { operator } = splitInputFormula(value);

    const operatorCharCode = operator.charCodeAt(0);

    if (operatorCharCode === Codes.Slash) {
        return "moveToPreviousPlaceholder" as Selector;
    }

    if (operatorCharCode === Codes.Caret) {
        return "moveToPreviousPlaceholder" as Selector;
    }

    return;
}

const mathOperators = [
    Codes.Plus,
    Codes.Hyphen,
    Codes.Asterisk,
    Codes.Slash,
    Codes.Caret,
];

function consumeMathOperator(state: ParserState): boolean {
    return state.consume((ch) => {
        return mathOperators.includes(ch);
    });
}

function escapeFormula(value: string) {
    return `$${value}$`;
}

function transformFormulaInput(value?: string): string {
    if (!value) return escapeFormula("\\placeholder{}");

    const { number, operator } = splitInputFormula(value);
    const operatorCharCode = operator.charCodeAt(0);

    if (operatorCharCode === Codes.Asterisk) {
        return escapeFormula(`${number}\\cdot`);
    }

    if (operatorCharCode === Codes.Slash) {
        return escapeFormula(`\\frac{${number}}{\\placeholder{}}`);
    }

    if (operatorCharCode === Codes.Slash) {
        return escapeFormula(`${number}^\\placeholder{}`);
    }

    return value;
}

function splitInputFormula(value: string) {
    const operator = value.at(-1);
    const number = value.slice(0, -1);

    return { number, operator };
}
