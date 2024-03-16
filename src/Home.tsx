import { useEffect } from "react";
import { useLocation } from "wouter";

import { useGetConfig } from "@/lib/client/query";

export default function Home() {
  const [, setLocation] = useLocation();
  const { data: appConfig } = useGetConfig();

  useEffect(() => {
    if (appConfig?.connectionString) {
      console.log("Connection String = " + JSON.stringify(appConfig));
      setLocation("/collections");
    } else {
      setLocation("/setup");
    }
  }, [appConfig, setLocation]);

  return null;
}
