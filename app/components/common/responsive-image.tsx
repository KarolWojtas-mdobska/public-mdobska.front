import { Image, type ImageProps } from '@chakra-ui/react';
import type { FunctionComponent } from 'react';

export type ResponsiveImageSource = {
    url: string;
    alt: string;
    media?: string;
};

type Props = Omit<ImageProps, 'width'> & {
    sources: ResponsiveImageSource[];
    eager?: boolean;
};

export const ResponsiveImage: FunctionComponent<Props> = ({ sources, eager = false, ...props }) => {
    return (
        <picture>
            {sources.map((item, index) => (
                <source key={index} srcSet={item.url} media={item.media} />
            ))}
            <Image {...props} loading={eager ? 'eager' : 'lazy'} src={sources[0]?.url} />
        </picture>
    );
};
