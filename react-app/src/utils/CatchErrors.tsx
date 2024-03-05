import axios, { AxiosError } from 'axios';
import { toast, TypeOptions } from 'react-toastify';

export const CatchErrors = (error: unknown, errorTitle: string) => {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (
            axiosError.response &&
            (axiosError.response.status === 422 ||
                axiosError.response.status === 400 ||
                axiosError.response.status === 401)
        ) {
            const message = axiosError.response.data.message;
            toastrNotify(message, 'error');
            console.error('Errors => ', axiosError.response.data.error);
        } else {
            // handle other error responses
            console.error(`Error ${errorTitle}() => `, axiosError);
        }
    } else {
        console.error(`Error ${errorTitle}() => `, error);
    }
};

const toastrNotify = (message: string, type: TypeOptions) => {
    try {
        toast(message, { type: type });
    } catch (error) {
        console.error('Error toastrNotify () => ', error);
    }
};

interface ErrorResponse {
    message: string;
    error: string | null;
}
