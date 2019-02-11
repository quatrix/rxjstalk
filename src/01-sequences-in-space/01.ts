import { from } from 'rxjs'

// create an observable
const numbers$ = from([1, 2, 3, 4])

// subscribe to an observable
numbers$.subscribe(n => console.log(`omg ${n}`))
