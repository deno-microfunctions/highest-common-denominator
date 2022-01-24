
export function getHighestCommonDenominator(a: number, b: number): number {
    if (!b) {
        return a;
    }

    return getHighestCommonDenominator(b, a % b);
}

