const getDiscountedPruductAveragePrice = (inventory: Product[]): number => {
return inventory.filter( (product : Product) => 
    product.discounted ).reduce( (acc: number, curr: Product): number => 
    ( acc + curr ) / inventory.filter( (produt : Product) => product.discounted).length, 0 ) ;
}


<T1,T2,T3>(x: T1, y: T2) => T3;
(x: number[]) => number;
<T>(X: Boolean, Y:T[]) => T;
<T1,T2>(f: (a: T2) => T1, g: (b: number) => T2) => (x: number) => T1;