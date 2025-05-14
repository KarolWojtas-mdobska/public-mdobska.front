import { Box, type BoxProps } from '@chakra-ui/react';
import type { FunctionComponent, ReactElement } from 'react';
import { AvatarCard } from '~/routes/home/avatar-card';
import classes from './carousel.module.css';
import type { ResponsiveImageSource } from './responsive-image';

export type CarouselItem = {
    id: string;
    image: ResponsiveImageSource[];
    content: ReactElement;
};

type Props = BoxProps & {
    items: CarouselItem[];
    cardBg?: string;
};

export const Carousel: FunctionComponent<Props> = ({ items, cardBg, ...props }) => {
    return (
        <Box {...props}>
            <ul className={classes.listContainer} style={{ paddingTop: '24px' }}>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={classes.listItem}
                        style={{
                            minWidth: '80%',
                        }}
                    >
                        <CarouselCard item={item} bg={cardBg} />
                    </li>
                ))}
            </ul>
        </Box>
    );
};

type CarouselCardProps = {
    item: CarouselItem;
    bg?: string;
};

const CarouselCard: FunctionComponent<CarouselCardProps> = ({ item, bg }) => {
    return (
        <AvatarCard image={item.image} bg={bg}>
            {item.content}
        </AvatarCard>
        // <Box h="100%" shadow="md" p="8" rounded="xl">
        //     {item.content}
        // </Box>
    );
};
