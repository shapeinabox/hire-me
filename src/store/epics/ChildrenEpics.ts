import { ofType, StateObservable } from "redux-observable";
import { catchError, concat, map, Observable, of, switchMap } from "rxjs";
import ChildrenService from "../../services/ChildrenSvc";
import { axiosError } from "../../utils/AxiosError";
import {
  CHILDREN_CHECK,
  CHILDREN_FETCH,
  fetchChildren,
  setChildren,
  updateChild,
} from "../features/ChildrenSlice";
import { setAppError, setLoading } from "../features/UISlice";
import { RootState } from "../store";

export function fetchChildrenEpic(
  action$: Observable<any>,
  state: StateObservable<RootState>
) {
  return action$.pipe(
    ofType(CHILDREN_FETCH),
    switchMap((action) => {
      const request = new ChildrenService()
        .fetchChildren(
          "11fc220c-ebba-4e55-9346-cd1eed714620",
          "fb6c8114-387e-4051-8cf7-4e388a77b673"
        )
        .pipe(
          map((resp) => {
            return setChildren(resp.data.children);
          }),
          catchError((err) => {
            const { code, message } = axiosError(err);
            return of(setAppError({ code, message }));
          })
        );
      return concat(of(setLoading(true)), request, of(setLoading(false)));
    })
  );
}

export function checkChildEpic(
  action$: Observable<any>,
  state: StateObservable<RootState>
) {
  return action$.pipe(
    ofType(CHILDREN_CHECK),
    switchMap((action) => {
      const date = new Date(action.payload.time);
      const request = new ChildrenService()
        .checkChild(
          action.payload.childId,
          `${date.getHours()}:${date.getMinutes()}`,
          action.payload.action
        )
        .pipe(
          map((resp) => {
            return updateChild(action.payload) as any;
            // return fetchChildren()
          }),
          catchError((err) => {
            const { code, message } = axiosError(err);
            return of(setAppError({ code, message }));
          })
        );
      return concat(of(setLoading(true)), request, of(setLoading(false)));
    })
  );
}

const epics = [fetchChildrenEpic, checkChildEpic];

export default epics;
