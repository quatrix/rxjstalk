import { from } from 'rxjs';
import { getCat } from '../utils'
import { mergeMap } from 'rxjs/operators';

const catColors$ = from(['gray', 'black', 'orange'])

const cats$ = catColors$.pipe(mergeMap((color: string) => getCat(color)))

cats$.subscribe(console.log)
