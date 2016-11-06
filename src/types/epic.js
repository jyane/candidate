// @flow

import type { Observable } from 'rxjs';
import type { Store } from 'redux';

/**
 * A = Action
 */

// Original extended interface of redux-observable.
interface ReduxObservable<A> extends Observable<A> {
  ofType(type: string): Observable<A>;
}

export type Epic<A> = (action$: ReduxObservable<A>, store?: Store<*>) => Observable<A>;

