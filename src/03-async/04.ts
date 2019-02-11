import * as terminalImage from 'terminal-image'

import { from, of } from 'rxjs';
import { getCat } from '../utils'
import { mergeMap, pluck, tap, delay, concatMap } from 'rxjs/operators';
import * as fs from 'fs-extra'

const catColors$ = from(['gray', 'black', 'orange'])

const catImages$ = catColors$.pipe(
  concatMap((color: string) => getCat(color)),
  pluck('image'),
)

const catBuffers$ = catImages$.pipe(
  concatMap((image: any) => fs.readFile(image)),
  concatMap((cat: Buffer) => terminalImage.buffer(cat)),
  concatMap(cat => of(cat).pipe(delay(1000))),
)

// nothing actually happens until this point
// when we subscribe!
catBuffers$.pipe(tap(console.log)).subscribe()
