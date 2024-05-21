import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const isVowel: (c: string) => boolean = (c: string): boolean => {
    return ['a', 'e', 'i', 'o', 'u', 'A', 'U', 'E', 'I', 'O'].reduce
    ( (acc: boolean, curr: string): boolean => c === curr || acc, false );
}
export const countVowels: (word: string) => number = (word: string): number => {
    return stringToArray(word).filter(isVowel).length;
}


/* Question 2 */
export const matchable: ( acc: string, curr: string ) => boolean = (acc: string, curr: string): boolean => {
    return acc.length === 0 ? false:
    stringToArray(acc)[acc.length-1] === '{' && curr === '}'
    || stringToArray(acc)[acc.length-1] === '(' && curr === ')'
    || stringToArray(acc)[acc.length-1] === '[' && curr === ']' ;

}

export const isBracket: (c: string) => boolean = (c: string): boolean => {
    return ['}', '{', '[', ']', '(', ')'].reduce
    ( (acc: boolean, curr: string): boolean => c === curr || acc, false );   
}
export const isPaired: ( str: string ) => boolean = ( str: string ): boolean => {
    return stringToArray(str).filter(isBracket).reduce( (acc: string, curr: string ): string => 
    matchable( acc, curr ) ? R.init(acc) : acc + curr, "" ) === "";
}


/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence : (tree: WordTree) => string = (tree: WordTree): string => {
    return tree.root+tree.children.reduce( ( acc: string, curr: WordTree ): string =>
        acc+" "+treeToSentence(curr), "" );
}

