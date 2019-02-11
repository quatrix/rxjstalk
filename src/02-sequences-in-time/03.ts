import { interval } from 'rxjs';
import { delay } from 'rxjs/operators'
import { printer } from '../utils'

const everySecond$ = interval(1000)
const delayed$ = everySecond$.pipe(delay(200))

everySecond$.subscribe(printer('every second    '))
delayed$.subscribe(printer('with 200ms delay'))
