"use client";

import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Row,
  Col,
  Checkbox,
  Divider,
} from "antd";
import { LeftOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { EllipsisVertical } from "lucide-react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const { Option } = Select;

// Sample options
const customers = [
  { value: "ivanov", label: "Иванов Иван Иванович" },
  { value: "petrov", label: "Петров Петр Петрович" },
];

const hrEmployees = [
  { value: "sidorova", label: "Сидорова Анна Сергеевна" },
  { value: "smirnov", label: "Смирнов Алексей Юрьевич" },
];

const positions = [
  { value: "engineer", label: "Инженер" },
  { value: "manager", label: "Менеджер" },
];

const jobTitles = [
  { value: "frontend", label: "Frontend Developer" },
  { value: "backend", label: "Backend Developer" },
];

const priorities = [
  { value: "high", label: "Высокий" },
  { value: "medium", label: "Средний" },
];

const departments = [
  { value: "it", label: "ИТ Отдел" },
  { value: "finance", label: "Финансовый отдел" },
];

const vacancyReasons = [
  { value: "new", label: "Новая должность" },
  { value: "replacement", label: "Замена сотрудника" },
];

export default function ApplicationForm() {
  return (
    <div className="min-h-screen w-full px-2 sm:px-4">
      {/* Top nav */}
      <div className="flex items-center text-sm text-gray-500 cursor-pointer space-x-2 mb-4">
        <Button type="primary" ghost className="p-0 h-auto border-none">
          <LeftOutlined style={{ fontSize: "18px" }} />
        </Button>
        <span className="text-black">Вернуться в черновики</span>
      </div>

      {/* Header and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full gap-3 mb-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Заявка <span className="text-[#333]">№ 0000001</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          <Button className="border-none bg-white rounded-full">
            Просмотр
          </Button>
          <Button className="border-none bg-white rounded-full">
            Сохранить
          </Button>
          <Button className="border-none bg-white rounded-full">
            Сохранить и выйти
          </Button>
          <Button className="border-none bg-white rounded-full">
            <EllipsisVertical />
          </Button>
        </div>
      </div>

      {/* Form Card */}
      <div className="rounded-[18px] p-0 border border-gray-300 mb-6">
        <div className="text-[#0D0E0C73] px-4 text-[16px] py-2 font-semibold">
          Общая информация
        </div>
        <Card className="rounded-[18px]">
          <Form layout="vertical">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Составитель заявки" name="creator">
                  <Input placeholder="Фамилия Имя Отчество" disabled />
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Заказчик" name="customer">
                  <Select placeholder="Введите ФИО или выберите" showSearch>
                    {customers.map((opt) => (
                      <Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Работник отдела кадров" name="hrEmployee">
                  <Select placeholder="Введите ФИО или выберите" showSearch>
                    fdsaf
                    {hrEmployees.map((opt) => (
                      <Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Наименование должности" name="positionTitle">
                  <Select placeholder="Выберите из списка">
                    {positions.map((opt) => (
                      <Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Должность/Профессия" name="jobTitle">
                  <Select placeholder="Выберите из списка">
                    {jobTitles.map((opt) => (
                      <Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={12} md={6} lg={4}>
                <Form.Item label="Количество вакансий" name="vacancyCount">
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Введите количество"
                  />
                </Form.Item>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Form.Item label="Приоритет" name="priority">
                  <Select placeholder="Выберите из списка" showSearch>
                    {priorities.map((opt) => (
                      <Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={11}>
                <Form.Item label="Структурное подразделение" name="department">
                  <Select placeholder="Введите текст или выберите" showSearch>
                    {departments.map((opt) => (
                      <Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={11}>
                <Form.Item label="Расположение рабочего места" name="location">
                  <Input placeholder="Введите текст или выберите" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={2}>
                <Form.Item label=" ">
                  <Button icon={<PlusOutlined />} />
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={10}>
                <Form.Item
                  label="Причина возникновения вакансии"
                  name="vacancyReason"
                >
                  <Select placeholder="Введите текст или выберите" showSearch>
                    {vacancyReasons.map((opt) => (
                      <Option key={opt.value} value={opt.value}>
                        {opt.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>

      {/* Second Section */}
      <div className="rounded-[18px] p-0 border border-gray-300 mb-6">
        <div className="text-[#0D0E0C73] px-4 text-[16px] py-2 font-semibold">
          Условия труда
        </div>
        <Card className="rounded-[18px]">
          <Form layout="vertical">
            <Row gutter={[16, 16]}>
              {/* Income Range */}
              <Col xs={24} md={12} lg={12}>
                <Form.Item label="Уровень дохода">
                  <Input.Group compact>
                    <Input style={{ width: "40%" }} placeholder="от" />
                    <Input style={{ width: "40%" }} placeholder="до" />
                    <Select defaultValue="BYN" style={{ width: "20%" }}>
                      <Select.Option value="BYN">BYN</Select.Option>
                      <Select.Option value="USD">USD</Select.Option>
                    </Select>
                  </Input.Group>
                </Form.Item>
              </Col>

              {/* Work Format */}
              <Col xs={24} md={12} lg={12}>
                <Form.Item label="Формат работы" name="workFormat">
                  <Select placeholder="Выберите из списка" />
                </Form.Item>
              </Col>

              {/* Employment Type */}
              <Col xs={24} md={12} lg={12}>
                <Form.Item label="Тип занятости" name="employmentType">
                  <Select placeholder="Выберите из списка" showSearch>
                    <Select.Option value="full">Полная занятость</Select.Option>
                    <Select.Option value="part">
                      Частичная занятость
                    </Select.Option>
                    <Select.Option value="temporary">
                      Временная работа
                    </Select.Option>
                    <Select.Option value="internship">Стажировка</Select.Option>
                    <Select.Option value="freelance">Фриланс</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* Rate */}
              <Col xs={24} md={12} lg={12}>
                <Form.Item label="Ставка" name="rateType">
                  <Select placeholder="Выберите из списка">
                    <Select.Option value="full">Полная</Select.Option>
                    <Select.Option value="0.75">0.75</Select.Option>
                    <Select.Option value="0.5">0.5</Select.Option>
                    <Select.Option value="0.25">0.25</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Business Trips */}
                <div className="w-full md:w-1/2">
                  <Form.Item label="Командировки">
                    <Divider />
                    <div className="space-y-2 w-4/6">
                      <Form.Item
                        name="tripAbroad"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox>Командировки за границу</Checkbox>
                      </Form.Item>
                      <Form.Item name="tripRB" valuePropName="checked" noStyle>
                        <Checkbox>Командировки по территории РБ</Checkbox>
                      </Form.Item>
                    </div>
                  </Form.Item>
                </div>

                {/* Additional Conditions */}
                <div className="w-full md:w-1/2">
                  <Form.Item label="Дополнительные условия">
                    <Divider />
                    <div className="space-y-2 w-4/6">
                      <Form.Item name="housing" valuePropName="checked" noStyle>
                        <Checkbox>Предоставление жилья</Checkbox>
                      </Form.Item>
                      <Form.Item
                        name="partialRent"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox>
                          Частичная компенсация по найму жилья
                        </Checkbox>
                      </Form.Item>
                      <Form.Item
                        name="partTime"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox>Работа по совместительству</Checkbox>
                      </Form.Item>
                      <Form.Item
                        name="foreignCitizens"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox>
                          Возможность трудоустройства иностранных граждан
                        </Checkbox>
                      </Form.Item>
                    </div>
                  </Form.Item>
                </div>
              </div>
            </Row>
          </Form>
        </Card>
      </div>

      {/* Third Section */}
      <div className="rounded-[18px] p-0 border border-gray-300 mb-6">
        <div className="text-[#0D0E0C73] px-4 text-[16px] py-2 font-semibold">
          Требования к кандидату
        </div>
        <Card className="rounded-[18px]">
          <div className="text-gray-500 border-b mb-3">Образование</div>
          <Form layout="vertical">
            <Row gutter={[16, 16]} align="bottom">
              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Уровень образования" name="educationLevel">
                  <Select placeholder="Выберите уровень образования">
                    <Select.Option value="basic">Базовое</Select.Option>
                    <Select.Option value="secondary">Среднее</Select.Option>
                    <Select.Option value="vocational">
                      Среднее специальное
                    </Select.Option>
                    <Select.Option value="higher">Высшее</Select.Option>
                    <Select.Option value="incomplete_higher">
                      Незаконченное высшее
                    </Select.Option>
                    <Select.Option value="postgraduate">
                      Аспирантура / Магистратура
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Квалификация" name="qualification">
                  <Select placeholder="Выберите квалификацию">
                    <Select.Option value="engineer">Инженер</Select.Option>
                    <Select.Option value="technician">Техник</Select.Option>
                    <Select.Option value="economist">Экономист</Select.Option>
                    <Select.Option value="lawyer">Юрист</Select.Option>
                    <Select.Option value="teacher">Преподаватель</Select.Option>
                    <Select.Option value="medical">
                      Медицинский работник
                    </Select.Option>
                    <Select.Option value="worker">Рабочий</Select.Option>
                    <Select.Option value="other">Другое</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={6}>
                <Form.Item label="Специальность" name="specialization">
                  <Select placeholder="Выберите специальность">
                    <Select.Option value="it">
                      Информационные технологии
                    </Select.Option>
                    <Select.Option value="construction">
                      Строительство
                    </Select.Option>
                    <Select.Option value="mechanics">Механика</Select.Option>
                    <Select.Option value="finance">
                      Финансы и кредит
                    </Select.Option>
                    <Select.Option value="jurisprudence">
                      Юриспруденция
                    </Select.Option>
                    <Select.Option value="pedagogy">Педагогика</Select.Option>
                    <Select.Option value="medicine">Медицина</Select.Option>
                    <Select.Option value="other">Другое</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={2} className="flex items-end">
                <Form.Item label=" ">
                  <Button icon={<MinusOutlined />} />
                </Form.Item>
              </Col>
            </Row>

            <div className="text-primary mb-3">Добавить образование</div>
            <div className="text-gray-500 border-b mb-3">Опыт</div>

            <Row gutter={[16, 16]} align="bottom">
              <Col xs={24} md={12} lg={12}>
                <Form.Item
                  label="Опыт работы по должности/профессии"
                  name="workExperience"
                >
                  <Input placeholder="Укажите опыт работы" />
                </Form.Item>
              </Col>

              <Col xs={12} md={6} lg={10}>
                <Form.Item label="Стаж (лет)" name="experienceYears">
                  <Input type="number" placeholder="0" />
                </Form.Item>
              </Col>

              <Col xs={12} md={6} lg={2} className="flex items-end">
                <Form.Item label=" ">
                  <Button icon={<MinusOutlined />} />
                </Form.Item>
              </Col>
            </Row>
            <div className="text-primary mb-3"> Добавить опыт по должности</div>

            <Row gutter={[16, 16]} align="bottom">
              <Col xs={24} md={12} lg={12}>
                <Form.Item
                  label="Опыт работы в организации (в какой)"
                  name="workExperience"
                >
                  <Input placeholder="Введите текст" />
                </Form.Item>
              </Col>

              <Col xs={12} md={6} lg={10}>
                <Form.Item label="Стаж (лет)" name="experienceYears">
                  <Input type="number" placeholder="0" />
                </Form.Item>
              </Col>

              <Col xs={12} md={6} lg={2} className="flex items-end">
                <Form.Item label=" ">
                  <Button icon={<MinusOutlined />} />
                </Form.Item>
              </Col>
            </Row>

            <div className="text-primary mb-3">Добавить опыт в организации</div>
            <div className="text-gray-500 border-b mb-3">Навыки и качества</div>
            <Row gutter={[16, 16]}>
              <Col xs={12} md={12} lg={24}>
                <Form.Item label="Личные качества" name="personalQualities">
                  <Select
                    mode="multiple"
                    placeholder="Выберите личные качества"
                    style={{ width: "100%" }}
                  >
                    <Select.Option value="responsible">
                      Ответственный
                    </Select.Option>
                    <Select.Option value="punctual">Пунктуальный</Select.Option>
                    <Select.Option value="organized">
                      Организованный
                    </Select.Option>
                    <Select.Option value="communicative">
                      Коммуникабельный
                    </Select.Option>
                    <Select.Option value="creative">Креативный</Select.Option>
                    <Select.Option value="teamPlayer">
                      Командный игрок
                    </Select.Option>
                    <Select.Option value="stressResistant">
                      Стрессоустойчивый
                    </Select.Option>
                    <Select.Option value="leader">Лидер</Select.Option>
                    <Select.Option value="hardworking">
                      Трудолюбивый
                    </Select.Option>
                    <Select.Option value="flexible">Гибкий</Select.Option>
                    <Select.Option value="motivated">
                      Мотивированный
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={12} md={12} lg={24}>
                <Form.Item label="Управленческие компетенции" name="leadership">
                  <Select mode="multiple" placeholder="Выберите компетенции">
                    <Select.Option value="leadership">Лидерство</Select.Option>
                    <Select.Option value="decisionMaking">
                      Принятие решений
                    </Select.Option>
                    <Select.Option value="problemSolving">
                      Решение проблем
                    </Select.Option>
                    <Select.Option value="teamManagement">
                      Управление командой
                    </Select.Option>
                    <Select.Option value="strategicThinking">
                      Стратегическое мышление
                    </Select.Option>
                    <Select.Option value="timeManagement">
                      Управление временем
                    </Select.Option>
                    <Select.Option value="conflictResolution">
                      Разрешение конфликтов
                    </Select.Option>
                    <Select.Option value="delegation">
                      Делегирование
                    </Select.Option>
                    <Select.Option value="negotiation">
                      Переговоры
                    </Select.Option>
                    <Select.Option value="projectManagement">
                      Управление проектами
                    </Select.Option>
                    <Select.Option value="communication">
                      Коммуникация
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={12} md={12} lg={24}>
                <Form.Item
                  label="Обязательные профессиональные навыки"
                  name="technicalKnowledge"
                >
                  <Select mode="multiple" placeholder="Выберите навыки">
                    <Select.Option value="technicalKnowledge">
                      Технические знания
                    </Select.Option>
                    <Select.Option value="problemSolvingSkills">
                      Навыки решения проблем
                    </Select.Option>
                    <Select.Option value="productKnowledge">
                      Знание продукта
                    </Select.Option>
                    <Select.Option value="communicationSkills">
                      Навыки коммуникации
                    </Select.Option>
                    <Select.Option value="teamworkSkills">
                      Навыки работы в команде
                    </Select.Option>
                    <Select.Option value="attentionToDetail">
                      Внимание к деталям
                    </Select.Option>
                    <Select.Option value="timeManagementSkills">
                      Навыки управления временем
                    </Select.Option>
                    <Select.Option value="customerService">
                      Обслуживание клиентов
                    </Select.Option>
                    <Select.Option value="dataAnalysis">
                      Анализ данных
                    </Select.Option>
                    <Select.Option value="multitasking">
                      Многозадачность
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={12} md={12} lg={24}>
                <Form.Item
                  label="Желаемые профессиональные навыки"
                  name="innovativeThinking"
                >
                  <Select mode="multiple" placeholder="Выберите навыки">
                    <Select.Option value="innovativeThinking">
                      Инновационное мышление
                    </Select.Option>
                    <Select.Option value="foreignLanguage">
                      Знание иностранных языков
                    </Select.Option>
                    <Select.Option value="digitalLiteracy">
                      Цифровая грамотность
                    </Select.Option>
                    <Select.Option value="leadershipSkills">
                      Лидерские качества
                    </Select.Option>
                    <Select.Option value="projectManagementSkills">
                      Навыки управления проектами
                    </Select.Option>
                    <Select.Option value="creativeThinking">
                      Творческое мышление
                    </Select.Option>
                    <Select.Option value="negotiationSkills">
                      Переговорные навыки
                    </Select.Option>
                    <Select.Option value="presentationSkills">
                      Навыки презентации
                    </Select.Option>
                    <Select.Option value="networking">
                      Навыки установления контактов
                    </Select.Option>
                    <Select.Option value="publicSpeaking">
                      Ораторское мастерство
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <div className="text-gray-500 border-b mb-3">
              Владение иностранными языками
            </div>
            <Row gutter={[16, 16]} align="bottom">
              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Выберите язык" name="language">
                  <Select placeholder="Выберите язык">
                    <Select.Option value="english">Английский</Select.Option>
                    <Select.Option value="russian">Русский</Select.Option>
                    <Select.Option value="french">Французский</Select.Option>
                    <Select.Option value="german">Немецкий</Select.Option>
                    <Select.Option value="spanish">Испанский</Select.Option>
                    <Select.Option value="chinese">Китайский</Select.Option>
                    <Select.Option value="arabic">Арабский</Select.Option>
                    <Select.Option value="other">Другой</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Уровень владения" name="languageProficiency">
                  <Select placeholder="Выберите уровень владения">
                    <Select.Option value="beginner">Начальный</Select.Option>
                    <Select.Option value="intermediate">Средний</Select.Option>
                    <Select.Option value="advanced">Продвинутый</Select.Option>
                    <Select.Option value="fluent">
                      Свободное владение
                    </Select.Option>
                    <Select.Option value="native">Родной</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <Form.Item label="Область применения" name="applicationField">
                  <Select placeholder="Выберите область применения">
                    <Select.Option value="business">Бизнес</Select.Option>
                    <Select.Option value="education">Образование</Select.Option>
                    <Select.Option value="medicine">Медицина</Select.Option>
                    <Select.Option value="technology">Технологии</Select.Option>
                    <Select.Option value="marketing">Маркетинг</Select.Option>
                    <Select.Option value="law">Право</Select.Option>
                    <Select.Option value="research">
                      Научные исследования
                    </Select.Option>
                    <Select.Option value="other">Другое</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <div className="text-primary mb-3">Добавить язык</div>
            <div className="text-gray-500 border-b mb-3">
              Дополнительные требования
            </div>

            <div className="w-full">
              <Form.Item>
                <div className="space-y-2 w-4/6">
                  <Form.Item name="tripAbroad" valuePropName="checked" noStyle>
                    <Checkbox>
                      Наличие документов государственного образца
                    </Checkbox>
                  </Form.Item>
                  <Form.Item name="tripRB" valuePropName="checked" noStyle>
                    <Checkbox>
                      Отсутствие записи в трудовой книжке об увольнении по
                      дискредитирующим основаниям
                    </Checkbox>
                  </Form.Item>
                  <Form.Item name="tripRB" valuePropName="checked" noStyle>
                    <Checkbox>Отсутствие медицинских противопоказаний</Checkbox>
                  </Form.Item>
                </div>
              </Form.Item>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="space-y-2 w-4/6">
                <Form.Item name="tripAbroad" valuePropName="checked" noStyle>
                  <Checkbox>
                    Наличие водительского удостоверения с указанием категорий
                  </Checkbox>
                </Form.Item>
              </div>
              <div>
                <Form.Item name="A" valuePropName="checked" noStyle>
                  <Checkbox>A</Checkbox>
                </Form.Item>

                <Form.Item name="B" valuePropName="checked" noStyle>
                  <Checkbox checked>B</Checkbox>
                </Form.Item>

                <Form.Item name="C" valuePropName="checked" noStyle>
                  <Checkbox checked>C</Checkbox>
                </Form.Item>

                <Form.Item name="D" valuePropName="checked" noStyle>
                  <Checkbox checked>D</Checkbox>
                </Form.Item>

                <Form.Item name="E" valuePropName="checked" noStyle>
                  <Checkbox>E</Checkbox>
                </Form.Item>

                <Form.Item name="F" valuePropName="checked" noStyle>
                  <Checkbox>БУ тракторист</Checkbox>
                </Form.Item>
              </div>
            </div>
            <div className="mt-2">
              <Form.Item name="Возможность" valuePropName="checked" noStyle>
                <Checkbox>Возможность переезда</Checkbox>
              </Form.Item>
            </div>

            <div className="mt-2 w-1/2">
              <Form.Item name="personalQualities">
                <Select
                  mode="multiple"
                  placeholder="Выберите личные качества"
                  style={{ width: "100%" }}
                >
                  <Select.Option value="responsible">item1</Select.Option>
                  <Select.Option value="punctual">item2</Select.Option>
                  <Select.Option value="organized">item3</Select.Option>
                  <Select.Option value="communicative">item4</Select.Option>
                  <Select.Option value="creative">item5</Select.Option>
                  <Select.Option value="teamPlayer">item6</Select.Option>
                  <Select.Option value="stressResistant">item7</Select.Option>
                  <Select.Option value="leader">item8</Select.Option>
                  <Select.Option value="hardworking">item9</Select.Option>
                  <Select.Option value="flexible">item10</Select.Option>
                  <Select.Option value="motivated">item11</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </Form>
        </Card>
      </div>

      {/* Fourth Section */}
      <div className="rounded-[18px] p-0 border border-gray-300">
        <Card className="rounded-[18px]">
          <div>Чем предстоит заниматься</div>

          <ReactQuill
  className="rounded-lg border-2 border-primary"
  theme="snow"
  value="Контроль и анализ выполнения технологических режимов подготовки и учета нефти и газа. 
Анализ и контроль текущих и годовых отчетов о производственной деятельности предприятия в области добычи нефти и газа, по направлению подготовки и системе сбора. 
Анализ и контроль за выполнением организационно-технических мероприятий в части добычи и транспортировки добываемой продукции. 
Формирование и контроль за выполнением программ строительства, замены и диагностики нефтепроводов и водоводов на предприятии. 
Контроль за выполнением программ по борьбе с коррозией нефтепроводов и водоводов. 
Контроль за работой установок по подготовке и переработке нефти, попутного и природного газа. 
Составление и корректировка заданий на закупку услуг, оборудования и нефтехимии для систем сбора и подготовки нефти и газа и поддержания пластового давления. 
Внедрение нового оборудования, химических реагентов и технологий в системах сбора и подготовки нефти и газа, и поддержания пластового давления. Составление и корректировка ежегодных заявок обособленных подразделений по материально-техническому обеспечению производства в подготовке и транспорту нефти. 
Участие в организации выполнения, контроле и учете утвержденных мероприятий, приказов, распоряжений и других руководящих документов в области деятельности отдела"
/>

        </Card>
      </div>
    </div>
  );
}
