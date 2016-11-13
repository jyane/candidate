// @flow

import type { Observable } from 'rxjs';
import type { Store } from 'redux';

/**
 * A = Action
 */

// Original extended interface of redux-observable.
interface ActionObservable<A> extends Observable<A> {
  ofType(arg: string): Observable<A>;
}

export type Epic<A> = (action$: ActionObservable<A>, store?: Store<*>) => Observable<A>;

