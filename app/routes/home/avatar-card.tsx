import { Image, Stack, type StackProps } from '@chakra-ui/react';
import type { FunctionComponent, PropsWithChildren, RefObject } from 'react';
import { useMounted } from '~/hooks/mounted';

type Props = PropsWithChildren &
    StackProps & {
        ref?: RefObject<HTMLDivElement>;
        url: string;
        alt: string;
    };

export const AvatarCard: FunctionComponent<Props> = ({ children, ref, url, alt, ...props }) => {
    const mounted = useMounted();
    return (
        <Stack
            direction={{ base: 'row', smDown: 'column' }}
            ref={ref}
            rounded={{ base: 'xl' }}
            shadow="md"
            align={{ base: 'flex-start', smDown: 'center' }}
            gap={{ base: 8, smDown: 0 }}
            {...props}
        >
            <Image
                src={url}
                boxSize={{ base: '150px', smDown: '200px' }}
                width={{ base: 'auto', smDown: '50%' }}
                rounded={{ base: 'xl' }}
                fit="cover"
                aspectRatio={{ base: 0.9 }}
                objectPosition={{ base: '50% 20%', smDown: '50% 20%' }}
                alt={alt}
                transform={{ base: 'translate(20%, -20%)', smDown: 'translate(0, -10%)' }}
                shadow="md"
            />
            {children}
        </Stack>
    );
};
