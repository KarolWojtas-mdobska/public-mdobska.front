import { Card, LinkBox, LinkOverlay } from '@chakra-ui/react';
import type { FunctionComponent, ReactElement } from 'react';

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
                        <Card.Title mt="2">{title}</Card.Title>
                        <Card.Description>{description}</Card.Description>
                    </Card.Body>
                </Card.Root>
            </LinkOverlay>
        </LinkBox>
    );
};
