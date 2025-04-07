"use client";

import React from "react";
import {
  Card,
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Row,
  Col,
  Flex,
} from "antd";
import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import { DotSquare, EllipsisVertical } from "lucide-react";

const { Option } = Select;

export default function ApplicationForm() {
  return (
    <div className=" min-h-screen">
      <div className="flex items-center text-sm text-gray-500 cursor-pointer space-x-2">
      <Button type="primary" ghost className="p-0 h-auto border-none">
      <LeftOutlined style={{ fontSize: "18px" }}   />
        </Button>
        <span>Вернуться в черновики</span>
      </div>

      <div className="flex justify-between items-start w-full mb-2">
        <div>
          <h1 className="text-3xl font-bold mt-2">
            Заявка <span className="text-[#333]">№ 0000001</span>
          </h1>
        </div>

        <div>
          <div className="flex gap-2 flex-wrap justify-end">
            <Button
              color="default"
              className="p-5 border-none bg-white rounded-full"
            >
              Просмотр
            </Button>

            <Button
              color="default"
              className="p-5 border-none bg-white rounded-full"
            >
              Сохранить
            </Button>

            <Button
              color="default"
              className="p-5 border-none bg-white rounded-full"
            >
              Сохранить и выйти
            </Button>

            <Button
              color="default"
              className="p-5 border-none bg-white rounded-full"
            >
              <EllipsisVertical />
            </Button>
          </div>
        </div>
      </div>

      <Card title="Общая информация" bordered={false}>
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Составитель заявки" name="creator">
                <Input placeholder="Фамилия Имя Отчество" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Заказчик" name="customer">
                <Select placeholder="Введите ФИО или выберите" showSearch />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Работник отдела кадров" name="hrEmployee">
                <Select placeholder="Введите ФИО или выберите" showSearch />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="Наименование должности" name="positionTitle">
                <Select placeholder="Выберите из списка" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Должность/Профессия" name="jobTitle">
                <Select placeholder="Выберите из списка" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Приоритет" name="priority">
                <Select placeholder="Выберите из списка" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Количество вакансий" name="vacancyCount">
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Введите количество"
                />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="Структурное подразделение" name="department">
                <Select placeholder="Введите текст или выберите" showSearch />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Расположение рабочего места" name="location">
                <Input placeholder="Введите текст или выберите" />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item label=" ">
                <Button icon={<PlusOutlined />} />
              </Form.Item>
            </Col>

            <Col span={10}>
              <Form.Item
                label="Причина возникновения вакансии"
                name="vacancyReason"
              >
                <Select placeholder="Введите текст или выберите" showSearch />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>

      {/* <div className="flex gap-2 justify-end mt-6">
        <Button>Просмотр</Button>
        <Button type="primary">Сохранить</Button>
        <Button type="default">Сохранить и выйти</Button>
      </div> */}
    </div>
  );
}
