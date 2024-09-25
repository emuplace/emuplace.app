import {
    Text,
    Grid,
    useMantineTheme,
    Group,
    ActionIcon
} from '@mantine/core';
import {
    IconLemon,
    IconLemon2,
    IconLeaf
} from '@tabler/icons-react';

export function Projects() {
    const theme = useMantineTheme();

    const mockdata = [
        { title: 'Cytrus', icon: IconLemon, color: 'yellow' },
        { title: 'Folium', icon: IconLeaf, color: 'green' },
        { title: 'Sudachi', icon: IconLemon2, color: 'green' }
    ];

    const items = mockdata.map((item) => (
        <Grid.Col span={4}>
            <Group justify='center'>
                <ActionIcon variant='transparent'>
                    <item.icon color={theme.colors[item.color][5]} size="2rem" />
                </ActionIcon>
                <Text>{item.title}</Text>
            </Group>
        </Grid.Col>
    ));

    return (
        <Grid>
            {items}
        </Grid>
    )
}