import React, { memo } from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { Link } from '@mui/material';

type TProps = {
    children: React.ReactNode;
    link: string;
    external: boolean;
};

export const NavigationButton: React.FC<TProps> = memo((props) => {
    let link;
    let resolved = useResolvedPath(props.link);
    let match = useMatch({ path: resolved.pathname, end: true });

    if (props.external) {
        link = (
            <Link href={props.link} target="_blank">
                {props.children}
            </Link>
        );
    } else {
        link = (
            <NavLink
                to={props.link}
                className={`${match ? 'active' : undefined}`}
                style={{
                    color: match ? 'rgb(143, 92, 44)' : 'inherit',
                    textDecoration: 'none',
                }}
            >
                {props.children}
            </NavLink>
        );
    }

    return link;
});
