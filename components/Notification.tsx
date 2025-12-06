

import React from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';
import { Notification as NotificationType } from '../types';

interface NotificationProps {
  notification: NotificationType | null;
}

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  if (!notification) return null;

  let Icon = CheckCircle;
  let bgColor = 'bg-pink-100';
  let textColor = 'text-pink-800';

  if (notification.type === 'error') {
    Icon = XCircle;
    bgColor = 'bg-red-100';
    textColor = 'text-red-700';
  } else if (notification.type === 'info') {
    Icon = Info;
    bgColor = 'bg-blue-100';
    textColor = 'text-blue-800';
  }

  return (
    <div className={`fixed top-5 right-5 left-5 sm:left-auto max-w-sm mx-auto sm:mx-0 z-50 p-3 sm:p-4 rounded-lg shadow-xl flex items-center space-x-3 transition-opacity duration-300 animate-slideIn ${bgColor} ${textColor}`}>
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm font-medium">{notification.message}</span>
    </div>
  );
};

export default Notification;
