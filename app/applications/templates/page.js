"use client";

import React, { useState } from "react";
import {
  Table,
  Input,
  Button,
  Badge,
  Popover,
  Checkbox,
  Divider,
  Select,
  Dropdown,
  Typography,
  Space,
  Menu,
} from "antd";
import {
  PlusOutlined,
  DownOutlined,
  UpOutlined,
  FilterOutlined,
  EllipsisOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { EllipsisVertical, Plus } from "lucide-react";

const { Search } = Input;
const mockData = [
  {
    id: "1",
    options: [
      { id: "1", name: "Иванов И." },
      { id: "2", name: "Петров П." },
      { id: "3", name: "Сидоров С." },
    ],
    number: "99999",
    name: "Администратор баз данных",
    position: {
      location: "Гомель",
      status: "Высокий",
      version: "v.2",
    },
    resume: "2",
    department: "Управление цифровизации, ОВиСПЦП",
    responses: {
      name: "Иванов И.",
      date: "05.02.2025",
    },
    updated: {
      name: "Миронова А.",
      date: "05.02.2025",
    },
    replies: "3",
    status: "Pending",
    created: "05.02.2025",
    manager: "Васильева А.",
    priority: "Высокий",
  },
  {
    id: "2",
    number: "99999",
    options: [
      { id: "1", name: "Иванов И." },
      { id: "2", name: "Петров П." },
      { id: "3", name: "Сидоров С." },
    ],
    name: "Администратор баз ",
    position: {
      location: "Гомель",
      status: "Pending",
      version: "v.1",
    },
    resume: "2",
    department: "Управление цифровизации, ОВиСПЦП",
    responses: {
      name: "Иванов И.",
      date: "05.02.2025",
    },
    updated: {
      name: "Миронова А.",
      date: "05.02.2025",
    },
    replies: "3",
    status: "Согласована ОК",
    created: "05.02.2025",
    manager: "Васильева А.",
    priority: "Высокий",
  },

  {
    id: "3",
    number: "99999",
    options: [
      { id: "1", name: "Иванов И." },
      { id: "2", name: "Петров П." },
      { id: "3", name: "Сидоров С." },
    ],
    name: "Администратор баз ",
    position: {
      location: "Гомель",
      status: "Pending",
      version: "v.1",
    },
    resume: "2",
    department: "Управление цифровизации, ОВиСПЦП",
    responses: {
      name: "Иванов И.",
      date: "05.02.2025",
    },
    updated: {
      name: "Миронова А.",
      date: "05.02.2025",
    },
    replies: "3",
    status: "Согласована ОК",
    created: "05.02.2025",
    manager: "Васильева А.",
    priority: "Высокий",
  },

  {
    id: "4",
    number: "99999",
    options: [
      { id: "1", name: "Иванов И." },
      { id: "2", name: "Петров П." },
      { id: "3", name: "Сидоров С." },
    ],
    name: "Администратор баз ",
    position: {
      location: "Гомель",
      status: "Pending",
      version: "v.1",
    },
    resume: "2",
    department: "Управление цифровизации, ОВиСПЦП",
    responses: {
      name: "Иванов И.",
      date: "05.02.2025",
    },
    updated: {
      name: "Миронова А.",
      date: "05.02.2025",
    },
    replies: "3",
    status: "Согласована ОК",
    created: "05.02.2025",
    manager: "Васильева А.",
    priority: "Высокий",
  },

  {
    id: "5",
    number: "99999",
    options: [
      { id: "1", name: "Иванов И." },
      { id: "2", name: "Петров П." },
      { id: "3", name: "Сидоров С." },
    ],
    name: "Администратор баз ",
    position: {
      location: "Гомель",
      status: "Pending",
      version: "v.1",
    },
    resume: "2",
    department: "Управление цифровизации, ОВиСПЦП",
    responses: {
      name: "Иванов И.",
      date: "05.02.2025",
    },
    updated: {
      name: "Миронова А.",
      date: "05.02.2025",
    },
    replies: "3",
    status: "Согласована ОК",
    created: "05.02.2025",
    manager: "Васильева А.",
    priority: "Высокий",
  },
  {
    id: "6",
    number: "99999",
    options: [
      { id: "1", name: "Иванов И." },
      { id: "2", name: "Петров П." },
      { id: "3", name: "Сидоров С." },
    ],
    name: "Администратор баз ",
    position: {
      location: "Гомель",
      status: "Pending",
      version: "v.1",
    },
    resume: "2",
    department: "Управление цифровизации, ОВиСПЦП",
    responses: {
      name: "Иванов И.",
      date: "05.02.2025",
    },
    updated: {
      name: "Миронова А.",
      date: "05.02.2025",
    },
    replies: "3",
    status: "Согласована ОК",
    created: "05.02.2025",
    manager: "Васильева А.",
    priority: "Высокий",
  },
];

const statusColors = {
  Высокий: "pink",
  Pending: "blue",
  Active: "orange",
};

const priorityColors = {
  Высокий: "red",
  Средний: "orange",
  Низкий: "pink",
};

const Index = () => {
  const [data, setData] = useState(mockData);
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: null,
  });
  const [filterConfig, setFilterConfig] = useState({});

  const handleSort = (columnKey) => {
    let direction = "ascend";
    if (sortConfig.column === columnKey && sortConfig.direction === "ascend") {
      direction = "descend";
    }
    setSortConfig({ column: columnKey, direction });
  };

  const [visible, setVisible] = useState(false);

  const handleButtonClick = () => {
    setVisible(!visible);
  };

  const columns = [
    {
      title: "№",
      dataIndex: "number",
      key: "number",
      render: (text, record) => (
        <div className="flex justify-between items-center">
          <div>
            <Dropdown
              className="bg-primary"
              overlay={
                <Menu>
                  {record.options.map((option) => (
                    <Menu.Item key={option.id}>{option.name}</Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["click"]}
            >
              <Typography.Link>
                <Space className="text-[#0D0E0C73]">
                  <EllipsisVertical className="h-5 w-5" />
                </Space>
              </Typography.Link>
            </Dropdown>
          </div>
          <div>{text}</div>
        </div>
      ),
    },
    ,
    {
      title: "Информация",
      key: "info",
      render: (record) => {
        const { location, status, version } = record.position;
        const name = record.name;

        return (
          <div className="flex flex-col space-y-2">
            <div className="font-bold">{name}</div>
            <div className="flex flex-row space-x-4">
              <div className="text-[#0D0E0C73]">{location}</div>
              <div>
                <Badge
                  count={
                    <span
                      style={{
                        backgroundColor: "#fff0f6",
                        color: "#eb2f96",
                        border: "1px solid #eb2f96",
                        borderRadius: "12px",
                        padding: "2px 8px",
                        fontWeight: "bold",
                      }}
                    >
                      Высокий
                    </span>
                  }
                />
              </div>
              <div>{version}</div>
            </div>
          </div>
        );
      },
      filters: [...new Set(data.map((item) => item.position.location))].map(
        (val) => ({
          text: val,
          value: val,
        })
      ),
      filteredValue: filterConfig.location || null,
      onFilter: (value, record) => record.position.location === value,
    },
    {
      title: "Статус",
      name: "Опубликована",
      dataIndex: "status",
      key: "status",
      filters: [...new Set(data.map((item) => item.status))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.status || null,
      onFilter: (value, record) => record.status === value,
    },

    {
      title: "Резюме",
      dataIndex: "resume",
      key: "resume",
      filters: [...new Set(data.map((item) => item.resume))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.resume || null,
      onFilter: (value, record) => record.resume === value,
      render: (value, record) => (
        <div>
          <div className="flex flex-row space-x-4">
            <div className="text-[#0D0E0C73] bg-gray-100 px-2 py-1 rounded flex items-center gap-x-2">
              <div className="text-black">{record.resume}</div>
              <div>
                <Button
                  className="border border-pink-400 bg-pink-50 text-pink-400"
                  size="small"
                >
                  +6
                </Button>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Подразделение",
      dataIndex: "department",
      key: "department",
      filters: [...new Set(data.map((item) => item.department))]
        .filter(Boolean)
        .map((val) => ({
          text: val,
          value: val,
        })),
      filteredValue: filterConfig.department || null,
      onFilter: (value, record) => record.department === value,
      render: (value, record) => (
        <div>
          <div className="w-28">{record.department}</div>
        </div>
      ),
    },

    {
      title: "Отклики",
      dataIndex: "replies",
      key: "replies",
      filters: [...new Set(data.map((item) => item.replies))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.replies || null,
      onFilter: (value, record) => record.replies === value,
      render: (value, record) => (
        <div>
          <div className="flex flex-row space-x-4">
            <div className="text-[#0D0E0C73] bg-gray-100 px-2 py-1 rounded flex items-center gap-x-2">
              <div className="text-black">{record.replies}</div>
              <div>
                <Button
                  className="border border-primary bg-secondary text-primary"
                  size="small"
                >
                  +6
                </Button>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Создано",
      dataIndex: "responses",
      key: "responses",
      filters: [...new Set(data.map((item) => item.responses?.name))]
        .filter(Boolean)
        .map((val) => ({
          text: val,
          value: val,
        })),
      filteredValue: filterConfig.responses || null,
      onFilter: (value, record) => record.responses?.name === value,
      render: (value, record) => (
        <div>
          <div className="text-black font-bold">{record.responses?.name}</div>
          <div className="text-gray-400">{record.responses?.date}</div>
        </div>
      ),
    },

    {
      title: "Изменено",
      dataIndex: "updated",
      key: "updated",
      filters: [...new Set(data.map((item) => item.updated?.name))]
        .filter(Boolean)
        .map((val) => ({
          text: val,
          value: val,
        })),
      filteredValue: filterConfig.updated || null,
      onFilter: (value, record) => record.updated?.name === value,
      render: (value, record) => (
        <div>
          <div className="text-black">{record.updated?.name}</div>
          <div className="text-gray-400">{record.updated?.date}</div>
        </div>
      ),
    },

    {
      title: "Менеджер ОК",
      dataIndex: "manager",
      key: "manager",
      sorter: (a, b) => a.manager - b.manager,
      filters: [...new Set(data.map((item) => item.manager))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.manager || null,
      onFilter: (value, record) => record.manager === value,
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Шаблоны</h1>
          <Button variant="outline" className="ml-3 rounded-full p-2">
            <Plus className="h-5 w-4" />
          </Button>
        </div>
      </div>
      <div className="w-full md:w-auto">
        <Input
          type="search"
          placeholder="Поиск"
          className="w-full md:w-[300px] rounded-full mb-2"
          prefix={<SearchOutlined className="text-gray-400" />}
        />
      </div>
     <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
             <Table
               columns={columns}
               dataSource={data}
               rowKey="id"
               onChange={(pagination, filters, sorter) => {
                 setFilterConfig(filters);
               }}
               pagination={false}
               className="rounded-2xl"
             />
           </div>
    </div>
  );
};

export default Index;
