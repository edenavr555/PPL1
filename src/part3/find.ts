import { Result, makeFailure, isOk, makeOk, bind, either } from "../lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult : <T>(pred:(x: T) => boolean, array:T[]) => Result<T> = <T>(pred: (x: T) => boolean, array:T[]):Result<T> =>{
    return array.reduce((acc:Result<T>, curr:T):Result<T> => isOk(acc)? acc : pred(curr)? makeOk(curr) : acc, makeFailure("No element found."));
}

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 : (array:number[])=>Result<number> = (array:number[]):Result<number> => {
    return bind(findResult( (x: number):boolean => x % 2 === 0, array), (y: number):Result<number> => makeOk(y * y));

}

export const returnSquaredIfFoundEven_v3 : (array:number[])=>number = (array:number[]):number => {
    return either((findResult( (x: number):boolean => x % 2 === 0, array)), (y: number):number => y * y, (message: string):number => -1); 
}
