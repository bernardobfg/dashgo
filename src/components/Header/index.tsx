import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext"
import { RiMenuLine } from "react-icons/ri"
import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
export function Header() {
    const { onOpen } = useSideBarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1400}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {!isWideVersion && (
                <IconButton
                    aria-label="Open Navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                />
            )}
            <Logo />
            {isWideVersion && <SearchBox />}
            <Flex
                align="center"
                ml="auto"
            >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}