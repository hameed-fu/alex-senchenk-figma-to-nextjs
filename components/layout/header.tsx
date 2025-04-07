import React from "react";
import { Button, Badge, Avatar, Dropdown, Menu } from "antd";
import { BellOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";

interface HeaderProps {
  title: string;
  id: string;
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, id, toggleSidebar }) => {
  const menuItems = [
    { key: "1", label: "Profile" },
    { key: "2", label: "Settings" },
    { key: "3", label: "Log Out" },
  ];

  return (
    <div className="bg-gray-100 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center"></div>

      <div className="flex items-center gap-2">
        <Badge count={11}>
          <Button
            type="text"
            icon={<BellOutlined style={{ fontSize: "20px" }} />}
            className="border border-gray-600 rounded-full p bg-white"
          />
        </Badge>
        <div className="ml-4 flex items-center bg-white rounded-full px-2 py-1">
          <Avatar
            style={{
              backgroundColor: "#f0f0f0",
              color: "#666",
            }}
            icon={<UserOutlined />}
            size="large"
          >
            AK
          </Avatar>

          <Dropdown
            overlay={
              <Menu items={menuItems} />
            }
            placement="bottomRight"
            trigger={['click']}
          >
            <Button
              type="text"
       
              icon={<DownOutlined style={{ fontSize: "18px" }} />}
              className="border-none"
            />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
