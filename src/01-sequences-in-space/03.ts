import { from } from 'rxjs'
import { filter, map } from 'rxjs/operators'


const numbers$ = from([1, 2, 3, 4, 5, 6])
const onlyEven$ = numbers$.pipe(filter(n => n % 2 === 0))
const evenTimesThree$ = onlyEven$.pipe(map(n => n * 3))

console.log('only even numbers, but multipled by 3:')
evenTimesThree$.subscribe(console.log)
