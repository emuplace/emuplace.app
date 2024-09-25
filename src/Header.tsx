import { Button, Group, Menu, rem } from "@mantine/core";
import {
    IconLemon,
    IconLemon2,
    IconLeaf
} from '@tabler/icons-react';

export function Header() {
    return (
        <>
            <Group justify="flex-end">
                <Menu arrowPosition="center" position="left-start" radius={'lg'} withArrow>
                    <Menu.Target>
                        <Button radius={'xl'} variant="default">Projects</Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item leftSection={<IconLemon style={{ width: rem(16), height: rem(16) }} />}>
                            Cytrus
                        </Menu.Item>
                        <Menu.Item leftSection={<IconLeaf style={{ width: rem(16), height: rem(16) }} />}>
                            Folium
                        </Menu.Item>
                        <Menu.Item leftSection={<IconLemon2 style={{ width: rem(16), height: rem(16) }} />}>
                            Sudachi
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>
        </>
    );
}