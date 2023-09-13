import { AppDispatch, RootStateType } from "@/app/appStore";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();