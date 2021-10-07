import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerCloseButton,DrawerFooter, DrawerHeader, DrawerBody, DrawerContent } from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext"
import { SideBarNav } from "./SideBarNav";

export function SideBar() {
  const {isOpen, onClose} = useSideBarDrawer()
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })
  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
          <DrawerContent bg="gray.800" p="4" >
          <DrawerCloseButton mt="6"/>
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
         </DrawerContent>
      </Drawer>
    )
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  )
}