"use client";

import React, { useState } from "react";
import { Card, Button, Space, Typography, Table, Tabs, Row, Col } from "antd";
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  TeamOutlined,
  RightOutlined,
} from "@ant-design/icons";

import CreateUserModal from "@/components/CreateUserModal";
import AddUsersModal from "@/components/AddUsersModal";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const subdivisions = [
  {
    id: 1,
    name: "Организация 1",
    expandable: true,
    children: [
      "Структурное подразделение 1",
      "Структурное подразделение 1",
      "Структурное подразделение 1",
      "Структурное подразделение 1",
    ],
  },
  { id: 2, name: "Подразделение 2" },
  { id: 3, name: "Подразделение 3" },
  { id: 4, name: "Подразделение 4", expandable: true },
  { id: 5, name: "Подразделение 5", expandable: true },
  { id: 6, name: "Подразделение 6", expandable: true },
];

const users = [
  {
    key: "1",
    name: "Васильева Анна Андреевна",
    position: "Инженер",
    email: "vasia-a@gmail.com",
  },
  {
    key: "2",
    name: "Васильева Анна Андреевна",
    position: "Инженер",
    email: "vasia-a@gmail.com",
  },
];

const Roles = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  const toggleExpand = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-3">
        Структура
      </h1>

      <Row gutter={16}>
        {/* Left Column */}
        <Col xs={24} md={12}>
          <Card
            className="bg-secondary"
            style={{ borderRadius: 12 }}
            bodyStyle={{ paddingTop: 0 }}
          >
            <div className="flex items-center m-3">
              <Title level={4} style={{ margin: 0 }}>
                Структурное подразделение
              </Title>
              <Button
                shape="circle"
                size="large"
                className="ml-3"
                icon={<PlusOutlined />}
                onClick={() => setIsModalOpen(true)}
              />
            </div>

            {subdivisions.map((item) => {
              const isExpanded = expandedItems.includes(item.id);

              return (
                <Card
                  key={item.id}
                  size="small"
                  bodyStyle={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                  style={{ borderColor: "#bbf7d0", borderRadius: 10 }}
                >
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Space
                        onClick={() => item.expandable && toggleExpand(item.id)}
                        style={{
                          cursor: item.expandable ? "pointer" : "default",
                        }}
                      >
                        {item.expandable && (
                          <RightOutlined
                            rotate={isExpanded ? 90 : 0}
                            style={{ fontSize: 12 }}
                          />
                        )}
                        <Text>{item.name}</Text>
                      </Space>

                      <Space>
                        <Button
                          icon={<EditOutlined />}
                          shape="circle"
                          size="small"
                          onClick={() => setIsModalOpen(true)}
                        />
                        <Button
                          icon={<PlusOutlined />}
                          shape="circle"
                          size="small"
                          onClick={() => setIsAddUserModalOpen(true)}
                        />
                        <Button
                          icon={<TeamOutlined />}
                          shape="circle"
                          size="small"
                          onClick={() => setIsAddUserModalOpen(true)}
                        />
                        <Button
                          icon={<DeleteOutlined />}
                          shape="circle"
                          size="small"
                        />
                      </Space>
                    </div>

                    {item.children && isExpanded && (
                      <div style={{ paddingLeft: 22, marginTop: 8 }}>
                        {item.children.map((child, idx) => (
                          <div key={idx} style={{ marginBottom: 4 }}>
                            {child}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </Card>
        </Col>

        {/* Right Column */}
        <Col xs={24} md={12}>
          <Card style={{ borderRadius: 12 }}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Пользователи" key="1">
                <div className="flex justify-between items-center mb-2">
                  <span style={{ fontWeight: 500 }}>Организация 1</span>
                  <Button type="link" style={{ color: "#52c41a" }}>
                    Добавить
                  </Button>
                </div>
                <Table
                  dataSource={users}
                  pagination={false}
                  columns={[
                    {
                      title: "Участник",
                      dataIndex: "name",
                      key: "name",
                    },
                    {
                      title: "Должность",
                      dataIndex: "position",
                      key: "position",
                    },
                    {
                      title: "Электронная почта",
                      dataIndex: "email",
                      key: "email",
                    },
                    {
                      title: "",
                      key: "action",
                      render: (_, record) => (
                        <Button
                          icon={<DeleteOutlined />}
                          shape="circle"
                          size="small"
                        />
                      ),
                    },
                  ]}
                />
              </TabPane>
              <TabPane tab="Роли" key="2">
                <p>Здесь будут роли</p>
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>

      <CreateUserModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <AddUsersModal
        open={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
      />
    </div>
  );
};

export default Roles;
