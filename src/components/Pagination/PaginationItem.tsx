import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}
export function PaginationIten({number, isCurrent=false}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: "default"
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        b: "gray.500"
      }}
    >
      {number}
    </Button>
  )
}