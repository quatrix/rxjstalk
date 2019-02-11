import { of, from } from 'rxjs';
import { getCat } from '../utils'
import { mergeMap, retry} from 'rxjs/operators';

const catColors$ = from(['gray', 'vova', 'black', 'orange'])

const getCatWithRetry = (color: string, attempts: number) =>
  of(color).pipe(
    mergeMap(c => getCat(c)),
    retry(attempts),
  )

catColors$
  .pipe(mergeMap((color: string) => getCatWithRetry(color, 5)))
  .subscribe(console.log, err => console.log('got errror', err))