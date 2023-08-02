import { common, components } from "replugged";

const { React, messages } = common;
const { Button, Modal, TextInput, Text, Divider, FormText } = components;
const { closeModal, openModal } = common.modal;

import { PreloadedUserSettings } from "../webpack";

let modalTimestamp: any;

function TimestampGenerateModal(props: any): JSX.Element {
  const [value, setValue] = React.useState<string>();

  return (
    <Modal.ModalRoot {...props}>
      <Modal.ModalHeader>
        <Text.H2>Generate Timestamp</Text.H2>
        <Modal.ModalCloseButton onClick={props.onClose} />
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <input
          type="datetime-local"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          style={{
            colorScheme:
              PreloadedUserSettings?.getCurrentValue().appearance.theme === 2 ? "light" : "dark",
          }}
        />
      </Modal.ModalContent>
    </Modal.ModalRoot>
  );
}

export function buildTimestampModal(): any {
  modalTimestamp = openModal((props: any) => <TimestampGenerateModal {...props} />);
}
