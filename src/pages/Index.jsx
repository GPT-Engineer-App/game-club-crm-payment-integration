import { Box, Button, Container, Flex, Heading, Input, Text, VStack, Image } from "@chakra-ui/react";
import { FaGamepad, FaMoneyBillWave, FaUserPlus, FaDatabase } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Игровой Клуб CRM Система
      </Heading>
      <Flex justifyContent="space-around" mb={10}>
        <Box textAlign="center">
          <FaGamepad size="3em" />
          <Text mt={2}>Управление Играми</Text>
        </Box>
        <Box textAlign="center">
          <FaMoneyBillWave size="3em" />
          <Text mt={2}>Платёжные Системы</Text>
        </Box>
        <Box textAlign="center">
          <FaUserPlus size="3em" />
          <Text mt={2}>Регистрация Пользователей</Text>
        </Box>
        <Box textAlign="center">
          <FaDatabase size="3em" />
          <Text mt={2}>База Данных</Text>
        </Box>
      </Flex>
      <VStack spacing={4}>
        <Heading as="h2" size="lg">
          Вход в Систему
        </Heading>
        <Input placeholder="Имя пользователя" />
        <Input placeholder="Пароль" type="password" />
        <Button colorScheme="blue" rightIcon={<FaGamepad />}>
          Войти
        </Button>
      </VStack>
      <Box mt={10} textAlign="center">
        <Image src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21wdXRlciUyMHNldHVwfGVufDB8fHx8MTcxMzU2NzQ2Mnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" />
        <Text mt={2}>Игровая Станция</Text>
      </Box>
    </Container>
  );
};

export default Index;
