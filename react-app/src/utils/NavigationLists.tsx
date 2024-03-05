type TNavigationsList = {
    guess: Array<TList>;
};

type TList = {
    to: string;
    name: string;
    external: boolean;
};

export const navigationLists = () => {
    let navigation: TNavigationsList;
    return (navigation = {
        guess: [
            { to: '/', name: 'Home', external: false },
            {
                to: '/gifs',
                name: 'Gifs',
                external: false,
            },
        ],
    });
};
