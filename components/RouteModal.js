'use client';

import { Modal, Radio, Button, Row, Col } from 'antd';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

export default function RouteModal({ open, onClose }) {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [routes, setRoutes] = useState([
    { label: 'Маршрут для экономиста' },
    { label: 'Маршрут для руководителей' },
    { label: 'Маршрут для руководителей' },
    { label: 'Маршрут для програмистов' },
  ]);

  const handleDone = () => {
    if (selectedRoute !== null) {
      console.log('Выбран маршрут:', routes[selectedRoute]);
    } else {
      console.log('Создание нового маршрута');
    }
    onClose();
  };

  const handleAddRoute = () => {
    const newIndex = routes.length + 1;
    setRoutes([...routes, { label: `Новый маршрут ${newIndex}` }]);
    setSelectedRoute(null);
  };

  return (
    <Modal
      title="Маршрут для согласования"
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose} type="outlined" className="rounded-full px-6">
          Отмена
        </Button>,
        <Button
          key="submit"
          
          onClick={handleDone}
          className="rounded-full px-6"
        >
          Готово
        </Button>,
      ]}
    >
      <Radio.Group
        onChange={(e) => setSelectedRoute(e.target.value)}
        value={selectedRoute}
        className="w-full mt-4 mb-4"
      >
        {routes.map((route, index) => (
          <Row key={index} className="mb-3 items-center cursor-pointer" onClick={() => setSelectedRoute(index)}>
            <Col span={1}>
              <Radio value={index} />
            </Col>
            <Col span={18}>{route.label}</Col>
            <Col span={5}>
              <Button type="text" className='text-primary' size="small">
                Просмотр
              </Button>
            </Col>
          </Row>
        ))}
        <Row className="mt-4">
          <Col span={24}>
            <Button
              type="text"
              
              icon={<PlusOutlined />}
              className="rounded-full text-primary"
              onClick={handleAddRoute}
            >
              Создать маршрут
            </Button>
          </Col>
        </Row>
      </Radio.Group>
    </Modal>
  );
}
