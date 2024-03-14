// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import ReactQueryProvider from "./ReactQueryProvider";

function App() {
  // const [count, setCount] = useState(0);
  // const { data: appConfig } = useGetConfig();

  // if (appConfig?.connectionString) {
  //   console.log("###");
  // } else {
  //   console.log("***");
  // }

  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <ReactQueryProvider>
        <MantineProvider defaultColorScheme="auto">{}</MantineProvider>
      </ReactQueryProvider>
    </>
  );
}

export default App;
