"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { ReactNode } from "react";
import { LuTrash } from "react-icons/lu";
export default function DeleteProvider({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} color="danger">
        <LuTrash size={20}></LuTrash>
      </Button>
      <Modal
        className="bg-orange-400"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="w-full">
          {(onCLose) => (
            <>
              <ModalBody>{children} <Button onPress={onCLose}>Cancelar</Button></ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}