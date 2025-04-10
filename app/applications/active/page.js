"use client";

import React, { useState } from "react";
import { Table, Input, Button, Badge, Popover, Checkbox, Divider } from "antd";
import {
  PlusOutlined,
  DownOutlined,
  UpOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Plus } from "lucide-react";

const { Search } = Input;

const mockData = [
  {
    id: "1",
    number: "99999",
    name: "Администратор баз данных",
    position: {
      location: "Гомель",
      status: "Высокий",
      version: "v.2",
    },

    resume: "Резюме 1",
    department: "Управление цифровизации, ОВиСПЦП",
    responses: {
      name: "Иванов И.",
      dae: "05.02.2025",
    },
    created: "05.02.2025",
    updated: "05.02.2025",
    manager: "Васильева А.",
    priority: "Высокий",
  },
  {
    id: "2",
    number: "99999",
    name: "Администратор баз ",
    position: {
      location: "Гомель",
      status: "Pending",
      version: "v.1",
    },
    resume: "Резюме 2",
    department: "Управление цифровизации, ОВиСПЦП",
    responses: {
      name: "Иванов И.",
      dae: "05.02.2025",
    },
    created: "05.02.2025",
    updated: "05.02.2025",
    manager: "Васильева А.",
    priority: "Высокий",
  },
];

const statusColors = {
  Высокий: "green",
  Pending: "blue",
};

const priorityColors = {
  Высокий: "red",
  Средний: "orange",
  Низкий: "green",
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

  const columns = [
    {
      title: "№",
      dataIndex: "number",
      key: "number",
      sorter: (a, b) => a.number - b.number,
      filters: [...new Set(data.map((item) => item.number))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.number || null,
      onFilter: (value, record) => record.number === value,
    },
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
                  color={statusColors[status]}  
                  text={status}
                  style={{ backgroundColor: statusColors[status], padding: '2px 6px', borderRadius: '5px' }}
                />
              </div>
              <div>{version}</div>
            </div>
          </div>
        );
      },
      filters: [...new Set(data.map((item) => item.position.location))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.location || null,
      onFilter: (value, record) => record.position.location === value,
    },
    {
      title: "Приоритет",
      dataIndex: "priority",
      key: "priority",
      filters: [...new Set(data.map((item) => item.priority))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.priority || null,
      onFilter: (value, record) => record.priority === value,
      render: (priority) => (
        <Badge color={priorityColors[priority]} text={priority} />
      ),
    },
    {
      title: "Локация",
      dataIndex: "position",
      key: "location",
      render: (position) => position.location,
      filters: [...new Set(data.map((item) => item.position.location))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.location || null,
      onFilter: (value, record) => record.position.location === value,
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      filters: [...new Set(data.map((item) => item.status))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.status || null,
      onFilter: (value, record) => record.status === value,
      render: (status) => (
        <Badge
          color={statusColors[status]} // Use the statusColors object for background color
          text={status}
          style={{ backgroundColor: statusColors[status], padding: '5px 10px', borderRadius: '5px' }}
        />
      ),
    },
    {
      title: "Приоритет",
      dataIndex: "priority",
      key: "priority",
      filters: [...new Set(data.map((item) => item.priority))].map((val) => ({
        text: val,
        value: val,
      })),
      filteredValue: filterConfig.priority || null,
      onFilter: (value, record) => record.priority === value,
      render: (priority) => (
        <Badge color={priorityColors[priority]} text={priority} />
      ),
    },
  ];
  
  

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Активные</h1>
          <Button variant="outline" className="ml-3 rounded-full p-2">
            <Plus className="h-5 w-4" />
          </Button>
        </div>
      </div>
      <div className="w-full md:w-auto">
        <Input
          type="search"
          placeholder="Поиск по всем полям"
          className="w-full md:w-[300px] rounded-full mb-2"
        />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        onChange={(pagination, filters, sorter) => {
          setFilterConfig(filters);
        }}
        pagination={false}
      />
    </div>
  );
};

export default Index;
