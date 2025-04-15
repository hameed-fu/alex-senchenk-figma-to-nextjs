'use client';

import { Modal, Button } from 'antd';

export default function DeleteModal({ open, onClose, onDelete }) {
  return (
    <Modal
      title="Удаление маршрута"
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="cancel" type="outlined" onClick={onClose} shape="round">
          Отмена
        </Button>,
        <Button key="submit"  shape="round" onClick={() => {
          onDelete();
          onClose();
        }}>
          Удалить
        </Button>,
      ]}
    >
      <p>Вы уверены, что хотите удалить этот маршрут?</p>
    </Modal>
  );
}
