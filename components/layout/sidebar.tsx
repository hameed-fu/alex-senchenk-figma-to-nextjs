'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ListCollapse } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FileTextOutlined,
  BarChartOutlined,
  FolderOpenOutlined,
  DeleteOutlined,
  FileOutlined,
  CompassOutlined,
  IdcardOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { Divider, Menu } from 'antd';

const sidebarItems = [
  {
    name: 'Заявки',
    icon: <CheckOutlined />,
    key: 'applications',
    children: [
      { name: 'Активные', key: 'active', icon: <BarChartOutlined /> },
      { name: 'Черновики', key: 'drafts', icon: <FileTextOutlined /> },
      { name: 'Опубликованные', key: 'published', icon: <FileTextOutlined /> },
      { name: 'Архив', key: 'archive', icon: <FolderOpenOutlined /> },
      { name: 'Шаблоны', key: 'templates', icon: <FileOutlined /> },
      { name: 'Удаленные', key: 'deleted', icon: <DeleteOutlined /> },
    ],
  },
  {
    name: 'Маршруты',
    icon: <CompassOutlined />,
    key: 'routes',
    children: [],
  },
  {
    name: 'Профили должностей',
    icon: <IdcardOutlined />,
    key: 'job-profiles',
    children: [],
  },
  { type: 'divider' },
  {
    name: 'Справочник',
    icon: <IdcardOutlined />,
    key: 'reference',
    children: [],
  },
  {
    name: 'Новый термин',
    icon: <IdcardOutlined />,
    key: 'new-term',
    children: [],
  },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState<string[]>(['applications']);
  const [selectedKey, setSelectedKey] = useState<string>('applications/');

  useEffect(() => {
    const cleanedPath = pathname.replace(/^\/+/, ''); // e.g. applications/drafts
    setSelectedKey(cleanedPath);

    const mainKey = cleanedPath.split('/')[0];
    if (mainKey) {
      setOpenKeys([mainKey]);
    }
  }, [pathname]);

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const onClick = (e: any) => {
    setSelectedKey(e.key);
  };

  const items = sidebarItems.map((item, index) => {
    if (item.type === 'divider') {
      return {
        type: 'group',
        key: `divider-${index}`,
        label: <Divider />,
      };
    }

    return {
      key: item.key,
      icon: item.icon,
      label: item.name,
      children:
        item.children?.map((child) => ({
          key: `${item.key}/${child.key}`,
          icon: child.icon,
          label: <Link href={`/${item.key}/${child.key}`}>{child.name}</Link>,
        })) ?? [],
    };
  });

  return (
    <div className="relative">
      <div
        className={cn(
          'fixed left-0 top-0 z-40  h-full bg-background transition-all duration-300 ease-in-out',
          isOpen ? 'w-64' : 'w-20'
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 py-4">
          <span
            className={cn(
              'ml-2 font-semibold transition-opacity duration-300',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            Профессионалы
          </span>
        </div>

        <ScrollArea className="h-[calc(100vh-4rem)] px-2">
          <Menu
            mode="inline"
            openKeys={openKeys}
            selectedKeys={[selectedKey]}
            onOpenChange={onOpenChange}
            onClick={onClick}
            style={{ border: 'none' }}
            items={items}
          />
        </ScrollArea>
      </div>

      {/* Toggle Sidebar */}
      <Button
        variant="ghost"
        className="fixed bottom-4 left-4 z-50 bg-white rounded-full p-2 shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ListCollapse
          className={cn(
            'h-5 w-5 text-gray-700 transition-transform duration-200',
            !isOpen && 'rotate-180'
          )}
        />
      </Button>
    </div>
  );
}
