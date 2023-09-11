import { QueryParamsType, ReducerType } from "./types";

export const setSearchParams = (
    state: ReducerType,
    action: {
        payload: QueryParamsType,
        type: string
    }
) => ({ ...state, data: action.payload})