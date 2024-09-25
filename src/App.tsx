import "@mantine/core/styles.css";
import { Container, MantineProvider, Space } from "@mantine/core";
import { theme } from "./theme";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export default function App() {
    const date = new Date();

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? "light" : "dark"}>
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
