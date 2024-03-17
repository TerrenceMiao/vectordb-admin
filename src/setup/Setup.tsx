import {
  Button,
  Container,
  Group,
  Paper,
  TextInput,
  Title,
} from "@mantine/core";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

import { updateConnectionString } from "@/lib/client/localstorage";
import { useGetConfig } from "@/lib/client/query";

export default function Setup() {
  const [, setLocation] = useLocation();
  const { data: appConfig } = useGetConfig();
  const [connectionString, setConnectionString] = useState(
    appConfig?.connectionString || ""
  );

  useEffect(() => {
    if (appConfig != null && appConfig.connectionString) {
      setConnectionString(appConfig.connectionString);
    }
  }, [appConfig]);

  const queryClient = useQueryClient();
  const connectButtonClicked = () => {
    updateConnectionString(connectionString);
    queryClient.setQueryData(["config"], { connectionString });
    setLocation("/collections");
  };

  const backButtonClicked = () => {
    setLocation("/collections");
  };

  return (
    <Container size={460} my={30}>
      <Title order={1} ta="center">
        VectorDB Admin
      </Title>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput
          label="VectorDB connection string"
          description="For example ChromaDB http://localhost:8000"
          placeholder="http://localhost:8000"
          value={connectionString}
          onChange={(e) => setConnectionString(e.currentTarget.value)}
        />
        <Group mt="lg" justify="flex-end">
          {appConfig?.connectionString && (
            <Button variant="default" onClick={backButtonClicked}>
              Back
            </Button>
          )}
          <Button onClick={connectButtonClicked}>Connect</Button>
        </Group>
      </Paper>
    </Container>
  );
}
