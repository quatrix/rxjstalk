import { interval } from 'rxjs';
import { printer } from '../utils'

interval(1000).subscribe(printer('every second'))