"use client"

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FunctionComponent, ReactNode, useEffect } from "react";

interface ModalMantineProps {
    isOpen:boolean,
    closeModal:()=>void,
    modalBody:ReactNode,
    size?:string
}
 
const ModalMantine: FunctionComponent<ModalMantineProps> = ({isOpen, closeModal,modalBody,size="xl"}) => {
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        if (isOpen) {
            open()
        }
        else{
            closeModal();
            close()
        }
    }, [isOpen]);

    function handleClose(){
        closeModal();
        close()
    }
    return ( 
        <Modal opened={opened} onClose={handleClose} size={size} withCloseButton={false} padding={0} radius={20}>
         {modalBody}
      </Modal>);
}
 
export default ModalMantine;