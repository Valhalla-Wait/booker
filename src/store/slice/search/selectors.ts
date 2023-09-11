import { createSelector } from "@reduxjs/toolkit";
import { RootStateType } from "../../rootReducer";

const searchParamsSelect = (state: RootStateType) => state.searchParams;

export const searchParamsDataSelector = createSelector(searchParamsSelect, (searchParamsState) => searchParamsState.data);