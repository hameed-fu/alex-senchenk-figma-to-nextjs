"use client";

import { Table, Button, Typography, Input } from "antd";
import { Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Dropdown, Menu } from "antd";
import { MoreOutlined } from "@ant-design/icons";

import CreateUserModal from "@/components/CreateUserModal";
const mockUsers = [
  {
    key: 1,
    name: "Васильева Анна Андреевна",
    position: "Инженер",
    email: "vasia-a@gmail.com",
    role: "Админ",
    date: "25.03.2025",
  },
  {
    key: 2,
    name: "Иванов Иван Иванович",
    position: "Работник ОК",
    email: "ivanov@example.com",
    role: "Работник ОК",
    date: "15.02.2025",
  },
  {
    key: 3,
    name: "Петров Петр Петрович",
    position: "Менеджер",
    email: "petrov@example.com",
    role: "Менеджер",
    date: "10.01.2025",
  },
];

const columns = [
  {
    title: "Действия",
    key: "actions",
    render: (_, record) => {
      const menu = (
        <Menu>
          <Menu.Item key="edit" onClick={() => alert(`Редактировать: ${record.name}`)}>
            Редактировать
          </Menu.Item>
          <Menu.Item key="delete" onClick={() => alert(`Удалить: ${record.name}`)}>
            Удалить
          </Menu.Item>
        </Menu>
      );

      return (
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button type="outlined" icon={<MoreOutlined className="h-5" />}  />
        </Dropdown>
      );
    },
  },
  {
    title: "ФИО",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Должность",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Роль",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
  },
];

const { Title } = Typography;

export default function UsersPage() {
  const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center mb-2">
        <Title level={4} style={{ margin: 0 }}>
          Пользователи
        </Title>
        <Button
          shape="circle"
          size="large"
          className="ml-3"
          icon={<Plus />}
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="w-full md:w-auto mb-4">
        <Input
          type="search"
          placeholder="Поиск"
          className="w-full md:w-[300px] rounded-full"
          prefix={<Search className="text-gray-400" />}
        />
      </div>

      <Table
        columns={columns}
        dataSource={mockUsers}
        pagination={false}
       
      />

       <CreateUserModal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
    </div>
  );
}
