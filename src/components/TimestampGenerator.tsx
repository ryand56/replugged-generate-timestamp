import { common, components } from "replugged";

const { React } = common;
const { Button, Modal, TextInput, Text, Divider } = components;
const { closeModal, openModal } = common.modal;

function TimestampGenerateModal(props: any) {
    return (
        <Modal.ModalRoot {...props}>
            <Modal.ModalHeader>
                <Text.H1>Generate Timestamp</Text.H1>
            </Modal.ModalHeader>
        </Modal.ModalRoot>
    );
}
