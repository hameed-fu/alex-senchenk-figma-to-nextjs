'use client';

import { Modal, Input, Table, Button } from 'antd';
import { useState } from 'react';

const roles = ['Админ', 'Работник ОК', 'Менеджер', 'Админ', 'Админ', 'Админ'];

const mockUsers = roles.map((role, index) => ({
  key: index,
  position: role,
}));

export default function AddUsersModal({ open, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const filteredData = mockUsers.filter((user) =>
    user.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: 'Роль',
      dataIndex: 'position',
      key: 'position',
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedKeys) => setSelectedRowKeys(newSelectedKeys),
  };

  const handleSubmit = () => {
    console.log('Selected roles:', selectedRowKeys);
    setSelectedRowKeys([]);
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      okText="Добавить"
      cancelText="Отмена"
      title="Добавить участника"
      width={600}
      footer={[
        <Button type="outlined" onClick={onClose}>
          Отмена
        </Button>,
        <Button key="submit" shape="round" onClick={handleSubmit}>
          Добавить
        </Button>,
      ]}
    >
      <Input
        placeholder="Поиск по роли"
        className="mb-4 rounded-full"
        value={searchTerm}
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        
      />
    </Modal>
  );
}
