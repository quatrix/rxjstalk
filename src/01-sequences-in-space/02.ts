import { from } from 'rxjs'
import { filter } from 'rxjs/operators'


const numbers$ = from([1, 2, 3, 4, 5, 6])
const onlyEven$ = numbers$.pipe(filter(n => n % 2 === 0))

console.log('only even numbers:')
onlyEven$.subscribe(console.log)
