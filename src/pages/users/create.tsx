import { Box, Flex, Heading, Divider, VStack, HStack, SimpleGrid, Button } from "@chakra-ui/react"
import Link from "next/link"
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from "../../components/Form/Input"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

type CreateUserFormData = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
}
const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup.string().oneOf([
    null,yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const {register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })
  const { errors } = formState
  const handleCreateUser:SubmitHandler<CreateUserFormData> = async (values) =>{
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto" px="6"
      >
        <SideBar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="large" fontWeigh="bold">Criar Usuário</Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" w="100%" spacing={["6", "8"]}>
              <Input
                name="name"
                label="Nome completo"
                {...register('name')}
                error={errors.name}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" w="100%" spacing={["6", "8"]}>
             <Input
                name="password"
                label="Senha"
                type="password"
                {...register('password')}
                error={errors.password}
              />
             <Input
                name="password_confirmation"
                label="Confirmação da senha"
                type="password"
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing={["6", "8"]}>
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}