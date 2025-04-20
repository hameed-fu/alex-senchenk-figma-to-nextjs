'use client';

import { Modal, Input, Table, Checkbox, Button } from 'antd';
import { useState } from 'react';

const mockUsers = Array(17).fill({
  name: 'Васильева Анна Андреевна',
  position: 'Инженер',
  email: 'vasia-a@gmail.com',
}).map((user, index) => ({
  ...user,
  key: index,
}));

export default function CreateUserModal({ open, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const filteredData = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: 'Пользователь',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Должность',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Электронная почта',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedKeys) => setSelectedRowKeys(newSelectedKeys),
  };

  const handleSubmit = () => {
    console.log('Selected users:', selectedRowKeys);
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
      title="Добавить пользователя"
      width={800}
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
        placeholder="Поиск"
        className="mb-4 rounded-full"
        value={searchTerm}
        type='search'
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        scroll={{ y: 700 }}
      />
    </Modal>
  );
}
