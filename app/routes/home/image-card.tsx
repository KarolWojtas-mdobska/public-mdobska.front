import { Image, Stack, type StackProps } from '@chakra-ui/react';
import type { FunctionComponent, PropsWithChildren, RefObject } from 'react';
import { useMounted } from '~/hooks/mounted';

type Props = PropsWithChildren &
    StackProps & {
        ref?: RefObject<HTMLDivElement>;
        url: string;
    };

export const ImageCard: FunctionComponent<Props> = ({ children, ref, url, ...props }) => {
    const mounted = useMounted();
    return (
        <Stack
            direction={{ base: 'row', smDown: 'column' }}
            ref={ref}
            rounded={{ base: 'full', smDown: 'lg' }}
            shadow="md"
            align={{ base: 'center' }}
            {...props}
        >
            <Image
                src={url}
                boxSize={{ base: '150px', smDown: '200px' }}
                width={{ base: 'auto', smDown: '50%' }}
                rounded={{ base: 'full', smDown: 'xl' }}
                fit="cover"
                aspectRatio={{ base: 0.9 }}
                objectPosition={{ base: '50% 20%', smDown: '50% 20%' }}
                alt="Naruto Uzumaki"
                transform={{ base: 'scale(120%)', smDown: 'translateY(-10%)' }}
                shadow="md"
            />
            {children}
        </Stack>
    );
};
