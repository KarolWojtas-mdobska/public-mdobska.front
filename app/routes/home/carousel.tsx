import { Box, type BoxProps } from '@chakra-ui/react';
import type { FunctionComponent, PropsWithChildren } from 'react';
import classes from './carousel.module.css';

type Props = BoxProps & {
    items: any[];
};

export const Carousel: FunctionComponent<Props> = ({ items, ...props }) => {
    return (
        <Box {...props}>
            <ul className={classes.listContainer}>
                {items.map((item) => (
                    <li
                        key={item}
                        className={classes.listItem}
                        style={{
                            height: '150px',
                            minWidth: '80%',
                        }}
                    >
                        <CarouselItem>{item}</CarouselItem>
                    </li>
                ))}
            </ul>
        </Box>
    );
};

type ItemProps = PropsWithChildren;

const CarouselItem: FunctionComponent<ItemProps> = ({ children, ...props }) => {
    return (
        <Box h="100%" shadow="md" p="8" rounded="xl">
            {children}
        </Box>
    );
};
