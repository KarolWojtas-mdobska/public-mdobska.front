import { Heading, HStack } from '@chakra-ui/react';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
    return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Home() {
    return (
        <HStack>
            <Heading>Hello</Heading>
        </HStack>
    );
}
