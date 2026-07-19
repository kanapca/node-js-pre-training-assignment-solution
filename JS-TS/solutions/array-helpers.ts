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
      result.push(mapper(item, i++));
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
    let i = 0;
    for(const item of source){
      if(predicate(item, i)) {
        result.push(item);
      }
      i++;
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
