"use client";
import { Button, Card, Col, Dropdown, Menu, Row, Space, Tag } from "antd";
import Title from "antd/es/skeleton/Title";
import {
  AlignEndVertical,
  Aperture,
  ArrowLeftCircle,
  ChevronDown,
  EllipsisVertical,
  Home,
  MapPin,
  Network,
  Pencil,
  Receipt,
  ReceiptText,
  SendHorizonal,
  Star,
} from "lucide-react";
import { LeftOutlined } from "@ant-design/icons";
import { useState } from "react";

import RouteModal from "@/components/RouteModal";
import PrintModal from "@/components/PrintModal";
import DownloadModal from "@/components/DownloadModal";
import DeleteModal from "@/components/DeleteModal";
import ApproveModal from "@/components/ApproveModal";

export default function DetailPage({ params }) {
  const { id } = params;
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);

  const items = [
    {
      key: "1",
      label: "Маршрут",
    },
    {
      key: "2",
      label: "Печать",
    },
    {
      key: "3",
      label: "Скачать",
    },
    {
      key: "4",
      label: "Удалить",
    },
  ];
  const [activeModal, setActiveModal] = useState(null); // null | '1' | '2' | '3' | '4'

  const handleMenuClick = ({ key }) => {
    setActiveModal(key);
  };

  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <div className="flex items-center text-sm text-gray-500 cursor-pointer space-x-2 mb-4">
        <Button type="primary" ghost className="p-0 h-auto border-none">
          <LeftOutlined style={{ fontSize: "18px" }} />
        </Button>
        <span className="ml-2">Назад</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start w-full gap-3 mb-3">
        <div className="flex flex-col md:flex-row">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Заявка <span className="text-[#333]">№ 0000001</span>
          </h1>
          <div className="ml-2 mt-1 flex items-center gap-2">
            <Tag color="default" className="rounded-full">
              Версия 2
            </Tag>
            <Tag color="pink" className="rounded-full">
              Высокий
            </Tag>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          <>
            <Button
              className="border-none bg-white rounded-full"
              size="large"
              onClick={() => setIsApproveModalOpen(true)}
            >
              <ReceiptText className="h-5" />
              Отправить на согласование
            </Button>

            <ApproveModal
              open={isApproveModalOpen}
              onClose={() => setIsApproveModalOpen(false)}
            />
          </>

          <Button
            className="bg-white border-none"
            shape="circle"
            icon={<Pencil className="h-4" />}
            size="large"
          />

          <div>
            <Dropdown
              menu={{ items, onClick: handleMenuClick }}
              trigger={["click"]}
            >
              <Button
                className="bg-white border-none"
                shape="circle"
                icon={<EllipsisVertical className="h-5" />}
                size="large"
              />
            </Dropdown>

            {/* Render modals based on active key */}
            {activeModal === "1" && (
              <RouteModal open={true} onClose={closeModal} />
            )}
            {activeModal === "2" && (
              <PrintModal open={true} onClose={closeModal} />
            )}
            {activeModal === "3" && (
              <DownloadModal open={true} onClose={closeModal} />
            )}
            {activeModal === "4" && (
              <DeleteModal open={true} onClose={closeModal} />
            )}
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-sm mb-4">Черновик</div>

      <div className="min-h-screen">
        <p className="text-[24px] text-[#0D0E0CD9]">Инженер-дизайнер</p>
        <p className="text-gray-400">Инженер</p>

        <Card className="mt-4 rounded-2xl">
          <Row gutter={[16, 16]}>
            <Col span={4}>
              <p className="text-gray-400">Заказчик</p>
            </Col>
            <Col span={6}>
              {" "}
              <p>Кузьмин Александр Андреевич</p>
            </Col>

            <Col span={12}>
              <div className="mt-2">
                <p className="flex ">
                  <Network className="text-primary mr-2" />
                  Производственное управление нефтепромыслового
                  и специализированного строительства
                </p>
              </div>
            </Col>
          </Row>

          <Row gutter={[16, 16]} className="m-5">
            <Col span={4}>
              <p className="text-gray-400">Ваканский</p>
            </Col>
            <Col span={6}>
              {" "}
              <p>2</p>
            </Col>

            <Col span={12}>
              <div className="mt-2">
                <p className="flex ">
                  <Home className="text-primary mr-2" />
                  Отдел внедрения и сопровождения проектов цифрового
                  производства
                </p>
              </div>
            </Col>
          </Row>

          <Row gutter={[16, 16]} className="m-5">
            <Col span={10}>
              <p className="flex">
                <Star className="text-primary mr-2 " />
                Перевод в другое подразделение
              </p>
            </Col>

            <Col span={12}>
              <div className="mt-2">
                <p className="flex ">
                  <MapPin className="text-primary mr-2" />
                  г.Гомель, ул. Рогачевская, 9
                </p>
              </div>
            </Col>
          </Row>
        </Card>

        <Row gutter={16} className="mt-3">
          <Col span={12} className="h-full">
            <Card
              style={{ minHeight: "130px" }}
              className="h-full rounded-2xl flex flex-col justify-center"
            >
              <Row gutter={16}>
                <Col span={12}>
                  <div className="text-gray-400">Работник ОК</div>
                </Col>
                <Col span={6}>
                  <div className="text-gray-400">Создана</div>
                </Col>
                <Col span={6}>
                  <div className="text-gray-400">Изменена</div>
                </Col>
              </Row>

              <Row gutter={16} className="mt-2">
                <Col span={12}>
                  <div>Васильева Анна Александровна</div>
                </Col>
                <Col span={6}>
                  <div>05.02.2025</div>
                </Col>
                <Col span={6}>
                  <div>05.02.2025</div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={6} className="h-full">
            <Card style={{ minHeight: "130px" }}>
              <div className="flex justify-between items-center h-full">
                <div className="text-gray-400">Резюме</div>

                <div className="flex flex-row space-x-4 ">
                  <div className="text-[#0D0E0C73] bg-gray-100 px-2 py-1 rounded flex items-center gap-x-2">
                    <div className="text-black">3</div>
                    <div>
                      <Tag color="purple" size="small">
                        +6
                      </Tag>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>

          <Col span={6} className="h-full">
            <Card style={{ minHeight: "130px" }}>
              <div className="flex justify-between items-center w-full">
                <div className="text-gray-400">Отклики</div>

                <div className="text-[#0D0E0C73] bg-gray-100 px-2 py-1 rounded flex items-center gap-x-3">
                  <div className="text-black">3</div>
                  <Tag color="green" size="small">
                    +6
                  </Tag>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Card className="mt-4">
          <Row justify="space-between" align="middle">
            <Col>
              <p strong>Публикация</p>
            </Col>
            <Col>
              <Button className="p-0 h-auto border-none text-gray-400">
                Показать <ChevronDown />
              </Button>
            </Col>
          </Row>
        </Card>

        <div className="rounded-[18px] p-0 border border-gray-300 mb-6 mt-3">
          <div className="text-[#0D0E0C73] px-4 text-[16px] py-2 font-semibold">
            Условия труда
          </div>
          <Card className="rounded-[18px]">
            <Row gutter={[16, 16]} className="mt-4">
              <Col span={10}>
                <p className="text-gray-400">Условия труда</p>
              </Col>

              <Col span={12}>
                <div className="mt-2">1000 - 2000 BYN</div>
              </Col>
            </Row>

            <Row gutter={[16, 16]} className="mt-4">
              <Col span={10}>
                <p className="text-gray-400">Формат работы</p>
              </Col>

              <Col span={12}>
                <div className="mt-2">Дистанционная</div>
              </Col>
            </Row>

            <Row gutter={[16, 16]} className="mt-4">
              <Col span={10}>
                <p className="text-gray-400">Тип занятости</p>
              </Col>

              <Col span={12}>
                <div className="mt-2">Полный рабочий день</div>
              </Col>
            </Row>

            <Row gutter={[16, 16]} className="mt-4">
              <Col span={10}>
                <p className="text-gray-400">Ставка</p>
              </Col>

              <Col span={12}>
                <div className="mt-2">1</div>
              </Col>
            </Row>

            <Row gutter={[16, 16]} className="mt-4">
              <Col span={10}>
                <p className="text-gray-400">Командировки за границу</p>
              </Col>

              <Col span={12}>
                <div className="mt-2">HET</div>
              </Col>
            </Row>

            <Row gutter={[16, 16]} className="mt-4">
              <Col span={10}>
                <p className="text-gray-400">Командировки по территории РБ</p>
              </Col>

              <Col span={12}>
                <div className="mt-2">HET</div>
              </Col>
            </Row>

            <Row gutter={[16, 16]} className="mt-4">
              <Col span={10}>
                <p className="text-gray-400">Предоставление жилья</p>
              </Col>

              <Col span={12}>
                <div className="mt-2">HET</div>
              </Col>
            </Row>
          </Card>
        </div>

        <div className="rounded-[18px] p-0 border border-gray-300 mb-6 mt-3">
          
          <div className="text-[#0D0E0C73] px-4 text-[16px] py-2 font-semibold">
          Требования к кандидату
          </div>
          <Card className="rounded-[18px] ">
            <Row gutter={[16, 16]} className="mt-4">
              <Col span={10}>
                <p className="text-gray-400">Образование</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">
                  Высшее профильное • Квалификация • Разработка нефтяных и
                  газовых месторождений
                </div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Опыт работы по должности</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">
                  Опыт работы на должностях линейных руководителей и
                  специалистов в области подготовки нефти — 5 лет
                </div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Опыт работы в организации</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">
                  НГДУ “Речицанефть” — контроль подготовки, учета и переработки
                  нефти и газа (УПН, ЦППН), 5 лет
                </div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Личные качества</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Личные качества</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Управленческие компетенции</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Управленческие компетенции</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Обязательные навыки</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Обязательные профессиональные навыки</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Желаемые навыки</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Желаемые профессиональные навыки</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Иностранные языки</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Английский • Немецкий</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Документы гос. образца</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Да</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Нет дискредитирующих увольнений</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Да</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Медицинские противопоказания</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Нет</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Положительная характеристика</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Да</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Водительское удостоверение</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">B; C; D</div>
              </Col>

              <Col span={10}>
                <p className="text-gray-400">Готовность к переезду</p>
              </Col>
              <Col span={12}>
                <div className="mt-2">Минск • Гомель • Речица</div>
              </Col>
            </Row>
          </Card>
        </div>

        <div className="rounded-[18px] p-0 border border-gray-300 mb-6 mt-3">
          <div className="text-[#0D0E0C73] px-4 text-[16px] py-2 font-semibold">
            Условия труда
          </div>
          <Card className="rounded-[18px]">
             <div>
             Контроль и анализ выполнения технологических режимов подготовки и учета нефти и газа. Анализ и контроль текущих и годовых отчетов о производственной деятельности предприятия в области добычи нефти и газа, по направлению подготовки и системе сбора. Анализ и контроль за выполнением организационно-технических мероприятий в части добычи и транспортировки добываемой продукции. Формирование и контроль за выполнением программ строительства, замены и диагностики нефтепроводов и водоводов на предприятии. Контроль за выполнением программ по борьбе с коррозией нефтепроводов и водоводов. Контроль за работой установок по подготовке и переработке нефти, попутного и природного газа. Составление и корректировка заданий на закупку услуг, оборудования и нефтехимии для систем сбора и подготовки нефти и газа и поддержания пластового давления. Внедрение нового оборудования, химических реагентов и технологий в системах сбора и подготовки нефти и газа, и поддержания пластового давления. Составление и корректировка ежегодных заявок обособленных подразделений по материально-техническому обеспечению производства в подготовке и транспорту нефти. Участие в организации выполнения, контроле и учете утвержденных мероприятий, приказов, распоряжений и других руководящих документов в области деятельности отдела.
             </div>
          </Card>
        </div>

        <Card className="mt-4">
          <Row justify="space-between" align="middle">
            <Col>
              <p strong>История</p>
            </Col>
            <Col>
              <Button className="p-0 h-auto border-none text-gray-400">
                Показать <ChevronDown />
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}
