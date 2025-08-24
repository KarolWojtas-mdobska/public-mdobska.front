import { Box, Heading, type BoxProps } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import classes from './highlighted-heading.module.css';

type HighHeadingProps = PropsWithChildren & Pick<BoxProps, 'maxW'>;

export default function HighHeading({ children, maxW }: HighHeadingProps) {
    return (
        <Box className={classes.highlightRoot} maxW={maxW}>
            <div className={classes.highlight}></div>
            <Heading fontFamily="brand" size={{ base: '3xl', mdDown: '2xl' }} letterSpacing={2}>
                {children}
            </Heading>
        </Box>
    );
}
