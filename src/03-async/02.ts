import { from } from 'rxjs';
import { getCat } from '../utils'
import { mergeMap } from 'rxjs/operators';

const concurrency = 2
const catColors$ = from(['gray', 'black', 'orange'])

catColors$
  .pipe(mergeMap((color: string) => getCat(color), concurrency))
  .subscribe(console.log)
