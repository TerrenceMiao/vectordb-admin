import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { useGetConfig } from "@/lib/client/query";
import { getConfig } from "@/lib/client/localstorage";

export default function Home() {
  const navigate = useNavigate();

  // const { data: appConfig } = useGetConfig();
  const appConfig = getConfig();

  useEffect(() => {
    if (appConfig?.connectionString) {
      navigate("/collections");
    } else {
      navigate("/setup");
    }
  }, [appConfig, navigate]);

  return null;
}
