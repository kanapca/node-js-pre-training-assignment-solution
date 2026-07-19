/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  try {
    if(source == null || source == undefined) {
      throw new TypeError("Can't map over null or undefined source");
    }


    const result: R[] = [];
    let i = 0;
    for(const item of source) {
      result[i] = mapper(item, i++);
    }

    return result;

  } catch(error) {
    if(error instanceof Error){
      console.error(error.message);
    } else {
      console.error("Unknown error");
    }


    throw error;
  }
  

  
  //throw new Error('mapArray: not implemented');
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  try {
    if(source == null || source == undefined) {
      throw new TypeError("Can't filter null or undefined source");
    }


    const result: T[] = [];
    let sourceIndex = 0;
    let resultIndex = 0;
    for(const item of source){
      if(predicate(item, sourceIndex)) {
        result[resultIndex++] = item;
      }
    sourceIndex++;
    }
    return result;

  } catch(error) {
    if(error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error");
    }


    throw error;
  }
  //throw new Error('filterArray: not implemented');
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  try {
    if(source == null || source == undefined) {
      throw new TypeError("Can't reduce null or undefined source");
    }
    let result: R = initial;
    let i = 0;
    for(const item of source) {
      result = reducer(result, item, i)
    }

    return result;

  } catch(error) {
    if(error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error");
    }

    throw error;
  }
  
  //throw new Error('reduceArray: not implemented');
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  try {
    if(source == null || source == undefined) {
      throw new TypeError("Can't part null or undefined source");
    }
    
    const result1: T[] = [];
    const result2: T[] = [];
    let i1 = 0;
    let i2 = 0;

    for(const item of source) {
      if(predicate(item)) {
        result1[i1++] = item;
      } else {
        result2[i2++] = item;
      }
    }

    return [result1, result2];

  } catch(error) {
    if(error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error");
    }

    throw error;
  }
  
  //throw new Error('partition: not implemented');
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  try {
    if(source == null || source == undefined) {
      throw new TypeError("Can't group null or undefined source");
    }
    const result = {} as Record<K, T[]>;
    for(const item of source) {
      const key = keySelector(item);

      if (!result[key]) {
        result[key] = [];
      }

      result[key][result[key].length] = item;
    }

    return result;

  } catch(error) {
    if(error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error");
    }

    throw error;
  }
  
  //throw new Error('groupBy: not implemented');
}
