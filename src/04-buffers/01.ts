import { from, of } from 'rxjs'
import { buffer, filter, concatMap, delay, map, share, tap } from 'rxjs/operators'

const DELIMITER = ''

const chunks$ = from([
  'hey h', 'o lets g', 'o', DELIMITER,
  'hello wor', 'ld', DELIMITER,
  'foo bar b', 'az', DELIMITER,
]).pipe(concatMap(s => of(s).pipe(delay(1))), share()) 

const onlyDelimiters$ = chunks$.pipe(filter(c => c === DELIMITER))

const msgs$ = chunks$.pipe(
  buffer(onlyDelimiters$),
  map(buffer => buffer.join('')),
)

msgs$.pipe(tap(msg => console.log(`got msg: ${msg}`))).subscribe()
