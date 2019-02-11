import { from } from 'rxjs'
import { filter, map } from 'rxjs/operators'


console.log('same as before:')
from([1, 2, 3, 4, 5, 6])
  .pipe(
    filter(n => n % 2 === 0),
    map(n => n * 3),
  )
  .subscribe(console.log)