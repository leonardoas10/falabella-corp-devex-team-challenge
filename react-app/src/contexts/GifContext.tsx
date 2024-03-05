import React, { useState } from 'react';
import { toast, TypeOptions } from 'react-toastify';
import axios from 'axios';

import { CatchErrors } from '../utils/CatchErrors';
import { TGif } from '../types/gifs';

type TGifContext = {
    gifs: Array<TGif>;
    toastrNotify: (message: string, type: TypeOptions) => void;
    handlerCreateGif: (title: string, file: File) => Promise<void>;
    handlerGetGifs: (
        title?: string,
        page?: number,
        limit?: number
    ) => Promise<void>;
};

type TProps = {
    children: React.ReactNode;
};

export const GifContext = React.createContext<TGifContext>({
    toastrNotify: (message: string, type: TypeOptions) => {},
    gifs: [{} as TGif],
    handlerGetGifs: async (title?: string, page?: number, limit?: number) => {},
    handlerCreateGif: async (title: string, file: File) => {},
});

export const GifContextProvider: React.FC<TProps> = (props) => {
    const [gifs, setGifs] = useState<Array<TGif>>([]);

    const toastrNotify = (message: string, type: TypeOptions) => {
        try {
            toast(message, { type: type });
        } catch (error) {
            console.error('Error toastrNotify () => ', error);
        }
    };

    const handlerCreateGif = async (title: string, file: File) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', file);

        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}gifs/upload`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            setGifs([...gifs, data]);
        } catch (error) {
            CatchErrors(error, 'handlerCreateGif');
        }
    };

    const handlerGetGifs = async (
        title?: string,
        page?: number,
        limit?: number
    ) => {
        try {
            let url = `${process.env.REACT_APP_API_URL}gifs`;
            // Check if title, page, or limit exist and add them as query parameters
            if (title || page || limit) {
                url += '?'; // Start of query parameters
                if (title) url += `title=${title}&`;
                if (page) url += `page=${page}&`;
                if (limit) url += `limit=${limit}&`;
                // Remove the trailing '&' if it exists
                url = url.slice(0, -1);
            }
            console.log('url => ', url);

            const { data } = await axios.get(url);
            setGifs(data);
        } catch (error) {
            CatchErrors(error, 'handlerGetGifs');
        }
    };

    const contextValue: TGifContext = {
        toastrNotify,
        handlerCreateGif,
        handlerGetGifs,
        gifs,
    };

    return (
        <GifContext.Provider value={contextValue}>
            {props.children}
        </GifContext.Provider>
    );
};
