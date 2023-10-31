import React from "react";
import { Box, Divider, Stack } from "@mui/material";

export default function StackComponent() {
  return (
    <Stack
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box>Box1</Box>
      <Box>Box2</Box>
      <Box>Box3</Box>
    </Stack>
  );
}
