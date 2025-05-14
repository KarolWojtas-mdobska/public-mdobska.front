import { Stack, VStack, type StackProps } from '@chakra-ui/react';
import type { FunctionComponent, PropsWithChildren, RefObject } from 'react';
import { ResponsiveImage, type ResponsiveImageSource } from '~/components/common/responsive-image';
import { useMounted } from '~/hooks/mounted';

type Props = PropsWithChildren &
    StackProps & {
        ref?: RefObject<HTMLDivElement>;
        image: ResponsiveImageSource[];
    };

export const AvatarCard: FunctionComponent<Props> = ({ children, ref, image, ...props }) => {
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
            <ResponsiveImage
                sources={image}
                boxSize={{ base: '150px', smDown: '200px' }}
                rounded={{ base: 'xl' }}
                fit="cover"
                aspectRatio={{ base: 0.9 }}
                objectPosition={{ base: '50% 20%', smDown: '50% 20%' }}
                transform={{ base: 'translate(24px, -24px)', smDown: 'translate(0, -8px)' }}
                shadow="md"
                zIndex={100}
            />
            <VStack p={{ base: 8, smDown: 6 }}>{children}</VStack>
        </Stack>
    );
};
