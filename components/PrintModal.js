'use client';

import { Modal } from 'antd';

export default function RouteModal({ open, onClose }) {
  return (
    <Modal
      title="Маршрут для согласования"
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <p>Содержимое маршрута согласования...</p>
    </Modal>
  );
}
