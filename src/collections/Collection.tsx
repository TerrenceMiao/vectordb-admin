import { Link, useNavigate, useParams } from "react-router-dom";

import {
  ActionIcon,
  Anchor,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Select,
  Text,
} from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";

import { getConfig } from "@/lib/client/localstorage";
import { useGetCollections } from "@/lib/client/query";

import RecordPage from "@/components/RecordPage";

export default function Collection() {
  const { collectionName } = useParams();

  // const { data: appConfig } = useGetConfig();
  const appConfig = getConfig();

  const currentCollectionName = collectionName!;
  const { data: collections } = useGetCollections(appConfig);

  const navigate = useNavigate();

  const collectionChanged = (value: string | null) => {
    if (value) {
      navigate(`/collections/${value}`);
    }
  };

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group h="100%" px="lg" justify="space-between">
          <Group>
            <Text fw={700}>VectorDB Admin</Text>
            {collections ? (
              <Select
                allowDeselect={false}
                value={currentCollectionName}
                data={collections?.map((c) => c.name)}
                onChange={collectionChanged}
              />
            ) : (
              <></>
            )}
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
      <AppShellMain>
        <RecordPage collectionName={currentCollectionName} />
      </AppShellMain>
    </AppShell>
  );
}
