import { Card, LinkBox, LinkOverlay } from '@chakra-ui/react';
import type { FunctionComponent, ReactElement } from 'react';
import HighHeading from '~/components/common/highlighted-heading/highlighted-heading.component';

type Props = {
    title: string;
    href: string;
    description: string;
    avatar?: ReactElement;
};

export const ExternalLink: FunctionComponent<Props> = ({ title, description, href, avatar }) => {
    return (
        <LinkBox width="100%">
            <LinkOverlay href={href}>
                <Card.Root variant="elevated" rounded="xl">
                    <Card.Body gap="2">
                        <Card.Title asChild mt="2">
                            <HighHeading maxW="min-content">{title}</HighHeading>
                        </Card.Title>
                        <Card.Description>{description}</Card.Description>
                    </Card.Body>
                </Card.Root>
            </LinkOverlay>
        </LinkBox>
    );
};
