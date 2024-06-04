import { ModalTemplate } from "../molecules/ModalTemplate";
import { EvidencePanel } from "../organisms/EvidencePanel";
import React from "react";

export const EvidencePanelDetail = ({ isOpen, onClose }) => {
  return (
    <ModalTemplate title="My Custom Modal" isOpen={isOpen} onClose={onClose}>
      <EvidencePanel />
    </ModalTemplate>
  );
};
