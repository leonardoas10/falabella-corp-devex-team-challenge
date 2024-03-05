import React, { useState } from 'react';
import { toast, TypeOptions } from 'react-toastify';
import axios from 'axios';

import { CatchErrors } from '../utils/CatchErrors';
import { TGif } from '../types/gifs';

type TGifContext = {
    gifs: Array<TGif>;
    toastrNotify: (message: string, type: TypeOptions) => void;
    handlerGetGifs: () => Promise<void>;
};

type TProps = {
    children: React.ReactNode;
};

export const GifContext = React.createContext<TGifContext>({
    toastrNotify: (message: string, type: TypeOptions) => {},
    gifs: [{} as TGif],
    handlerGetGifs: async () => {},
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

    const handlerGetGifs = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}gifs`
            );
            console.log('Data => ', data);
            // setGifs()
            // // setTags([...tags, ...data.tags]);
        } catch (error) {
            CatchErrors(error, 'handlerGetTags');
        }
    };

    const contextValue: TGifContext = { toastrNotify, handlerGetGifs, gifs };

    return (
        <GifContext.Provider value={contextValue}>
            {props.children}
        </GifContext.Provider>
    );
};
