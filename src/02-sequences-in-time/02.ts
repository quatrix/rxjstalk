import { interval } from 'rxjs';
import { map, filter } from 'rxjs/operators'
import { printer } from '../utils'

interval(1000)
  .pipe(
    map((n: number) => n + 1),
    filter((n: number) => n % 2 === 0),
  )
  .subscribe(printer('every even second'))