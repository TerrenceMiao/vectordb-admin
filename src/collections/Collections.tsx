import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ActionIcon,
  Anchor,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
  Group,
  Paper,
  Text,
} from "@mantine/core";

import { IconSettings } from "@tabler/icons-react";

import { getConfig } from "@/lib/client/localstorage";
import { useGetCollections } from "@/lib/client/query";

export default function Collections() {
  const navigate = useNavigate();

  // const { data: config } = useGetConfig();
  const appConfig = getConfig();

  useEffect(() => {
    if (appConfig && !appConfig.connectionString) {
      navigate(`/setup`);
    }
  }, [appConfig, navigate]);

  //
  const { data: collections } = useGetCollections(appConfig);

  useEffect(() => {
    if (collections != null && collections.length > 0) {
      navigate(`/collections/${collections[0].name}`);
    }
  }, [collections, navigate]);

  if (collections != null && collections.length === 0) {
    return (
      <Container ta={"center"}>
        <Paper withBorder ta={"center"} shadow="md" p={30} radius="md" mt="xl">
          <Text>There is no collections.</Text>
          <Text>
            <Link to={"/setup"}>Setup</Link> a new VectorDB instance.
          </Text>
        </Paper>
      </Container>
    );
  }

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group h="100%" px="lg" justify="space-between">
          <Group>
            <Text fw={700}>VectorDB Admin</Text>
          </Group>
          <Group>
            <Text size="sm" c="dimmed">
              {appConfig?.connectionString}
            </Text>
            <Anchor component={Link} to="/setup" title={"Setup"}>
              <ActionIcon variant="default" aria-label="Settings" size={"lg"}>
                <IconSettings stroke={1.5} />
              </ActionIcon>
            </Anchor>
          </Group>
        </Group>
      </AppShellHeader>
      <AppShellMain></AppShellMain>
    </AppShell>
  );
}
