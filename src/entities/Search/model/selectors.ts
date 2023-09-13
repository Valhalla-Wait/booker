import { RootStateType } from "@/app/appStore";
import { createSelector } from "@reduxjs/toolkit";

const searchParamsSelect = (state: RootStateType) => state.searchParams;

export const searchParamsDataSelector = createSelector(searchParamsSelect, (searchParamsState) => searchParamsState.data);