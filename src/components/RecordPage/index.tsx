import { Box } from "@mantine/core";

import RecordPanel from "./RecordPanel";
import SearchPanel from "./SearchPanel";

const RecordPage = ({ collectionName }: { collectionName: string }) => {
  return (
    <Box>
      <SearchPanel />
      <RecordPanel collectionName={collectionName} />
    </Box>
  );
};

export default RecordPage;
