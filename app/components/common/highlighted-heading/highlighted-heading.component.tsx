import { Heading } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import classes from './highlighted-heading.module.css';

export default function HighHeading(props: PropsWithChildren) {
    return (
        <div className={classes.highlightRoot}>
            <Heading>{props.children}</Heading>
            <div className={classes.highlight}></div>
        </div>
    );
}
