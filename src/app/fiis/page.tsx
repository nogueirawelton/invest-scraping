import { Ranking } from "@/components/fii/ranking";
import { Box } from "@/components/global/box";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Fiis() {
  return (
    <ResizablePanelGroup
      className="flex flex-1"
      direction="horizontal"
    >
      <ResizablePanel
        className="border flex-1 border-zinc-200 rounded-sm p-4"
        defaultSize={70}
      ></ResizablePanel>

      <ResizableHandle className="!w-8 block bg-transparent" />

      <ResizablePanel
        defaultSize={30}
        className="flex-1 flex flex-col"
      >
        <Box className="overflow-hidden">
          <Ranking />
        </Box>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
