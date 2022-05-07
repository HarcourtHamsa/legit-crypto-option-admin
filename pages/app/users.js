import React, { useState } from "react";
import DashboardWrapper from "../../components/app/DashboardWrapper";
import FloatingButton from "../../components/FloatingButton";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Text,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import helpers from "../../helpers";
import { useRouter } from "next/router";

function Users() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = React.useState([]);
  const router = useRouter();

  const deleteUser = async (email) => {
    await helpers
      .deleteUser(email)
      .then(() => router.push("/app"))
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    setLoading(true);

    async function fetchUsers() {
      await helpers
        .getAllUsers()
        .then((data) => {
          setLoading(false);
          setUsers(data.data);
        })
        .catch((error) => console.log(error));
    }

    fetchUsers();
  }, []);
  return (
    <div>
      <DashboardWrapper>
        {loading ? (
          <Text textAlign="center" color="white" my={6}>
            Fetching data...
          </Text>
        ) : (
          <TableContainer>
            <Table variant="unstyled" color="white">
              <Thead>
                <Tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Email</Th>
                  <Th isNumeric>Invested</Th>
                  <Th isNumeric>Balance</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user) => {
                  return (
                    <Tr key={Math.random()}>
                      <Td>{user?.firstName}</Td>
                      <Td>{user?.lastName}</Td>
                      <Td>{user?.email}</Td>
                      <Td isNumeric>{user?.amountDeposited}</Td>
                      <Td isNumeric>{user?.balance}</Td>
                      <Td>
                        <Button
                          bg={"blue.400"}
                          color={"white"}
                          fontWeight="normal"
                          onClick={() => {
                            router.push(
                              {
                                pathname: `/app/user`,
                                query: {
                                  ...user,
                                },
                              },
                              "app/user/"
                            );
                          }}
                          size="sm"
                          mt={0}
                          _hover={{
                            bg: "blue.500",
                          }}
                        >
                          Edit
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          bg={"red.400"}
                          color={"white"}
                          fontWeight="normal"
                          size="sm"
                          onClick={() => deleteUser(user?.email)}
                          mt={0}
                          _hover={{
                            bg: "red.500",
                          }}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </DashboardWrapper>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>You are about to delete a user's record</ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              colorScheme="green"
              mr={2}
              fontWeight="normal"
            >
              Continue
            </Button>
            <Button onClick={onClose} colorScheme="red" fontWeight="normal">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <FloatingButton />
    </div>
  );
}

export default Users;
