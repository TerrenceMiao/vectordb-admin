import RecordPage from "@/components/RecordPage";

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

import { useLocation } from "wouter";

import { useGetCollections, useGetConfig } from "@/lib/client/query";

// import type { ReactNode } from "react";

// export default function Collections({
//   children,
//   params,
// }: {
//   children: ReactNode;
//   params: { name: string };
// })
export default function Collections() {
  const { data: config } = useGetConfig();
  // const { name: currentCollectionName } = params;
  const currentCollectionName = "";
  const { data: collections } = useGetCollections(config);
  // const { name } = params;
  const name = "anythingllm-workspace";
  const [, setLocation] = useLocation();

  const collectionChanged = (name: string | null) => {
    setLocation(`/collections/${name}`);
  };

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group h="100%" px="lg" justify="space-between">
          <Group>
            <Text fw={700}>Chromadb Admin</Text>
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
              {config?.connectionString}
            </Text>
            {/* <Anchor component={Link} href="/setup" title={"Setup"}> */}
            <Anchor href="/setup" title={"Setup"}>
              <ActionIcon variant="default" aria-label="Settings" size={"lg"}>
                <IconSettings stroke={1.5} />
              </ActionIcon>
            </Anchor>
          </Group>
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <RecordPage collectionName={name} />
      </AppShellMain>
    </AppShell>
  );
}
