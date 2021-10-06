import { Stack, Button, Box } from "@chakra-ui/react"
import { PaginationIten } from "./PaginationItem"
export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationIten number={1} isCurrent />
        <PaginationIten number={2} />
        <PaginationIten number={3} />
        <PaginationIten number={4} />
      </Stack>

    </Stack>
  )
}