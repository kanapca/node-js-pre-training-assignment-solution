function nullUndefCheck<T, R>(source1: readonly T[], beginning: boolean, message?: string) {
    if(beginning) {
        if(source1 === null || source1 === undefined) {
            throw new TypeError("Source can't be null or undefined");
        }
    } else {
        if(source1 === null || source1 === undefined) {
            throw new Error(`Couldn't ${message}`);
        }
    }
}
//^ throws an error if input/output is null or undefined

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
    nullUndefCheck(source, true);

    const result: R[] = [];
    let index = 0;
    for(const item of source) {
        result[index] = mapper(item, index++);
    }

    
    nullUndefCheck(result, false, "map the array");
    return result;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
    nullUndefCheck(source, true);

    const result: T[] = [];
    let index = 0;
    let i = 0;
    for(const item of source) {
        predicate(item, index) ? result[i++] = item : index++;
    }

    nullUndefCheck(result, false, "filter the array");
    return result;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
    nullUndefCheck(source, true);

    let index = 0;;
    for(const item of source) {
        initial = reducer(initial, item, index++);
    }

    return initial;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
    nullUndefCheck(source, true);
    let op1: T[] = [];
    let op2: T[] = [];
    let index1 = 0;
    let index2 = 0;
    for(const item of source) {
        predicate(item) ? op1[index1++] = item : op2[index2++] = item;
    }

    nullUndefCheck(op1, false, "perform a partition of the array");
    nullUndefCheck(op2, false, "perform a partition of the array");

    return [op1, op2];
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
    nullUndefCheck(source, true);
}