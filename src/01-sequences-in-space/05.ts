import { from } from 'rxjs'
import { filter, map, reduce } from 'rxjs/operators'


console.log('sum of even numbers multipled by 3 between 1 and 6:')
from([1, 2, 3, 4, 5, 6])
  .pipe(
    filter(n => n % 2 === 0),
    map(n => n * 3),
    reduce((sum: number, n: number) => sum + n, 0)
  )
  .subscribe(console.log)