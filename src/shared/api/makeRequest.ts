import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { NetworkError } from "./errors";
import { TApiResponse } from "./types";

export const makeRequest = <T>({
    baseURL = 'https://www.googleapis.com/books/v1/volumes/',
    url,
    method = 'get',
    headers = {},
    params = {},
    responseType = 'json',
    data = {},
    onUploadProgress,
}: AxiosRequestConfig): TApiResponse<T> => {

    return axios
        .request({
            baseURL,
            url,
            method,
            headers,
            params,
            responseType,
            data,
            onUploadProgress,
        })
        .catch(async ({ response }: AxiosError) => {
            if (response) {
                const {
                    data,
                    status,
                } = response;
                throw new NetworkError({ message: getErrorMessage(data), status });
            } else {
                throw new NetworkError({
                    message: 'Соединение с сервером отсутствует',
                    status: 502,
                });
            }
        });
};