import "@mantine/core/styles.css";
import { Container, MantineProvider, Space } from "@mantine/core";
import { theme } from "./theme";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export default function App() {
    return (
        <MantineProvider theme={theme} forceColorScheme="dark">
            <Container my={'xl'}>
                <Header />
                <Space h={'xl'} />
                <Hero />
                <Space h={'xl'} />
                <Projects />
            </Container>
        </MantineProvider>
    );
}
