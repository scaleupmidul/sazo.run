import React from 'react';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Notification as NotificationType } from '../types';

interface NotificationProps {
  notification: NotificationType | null;
}

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  if (!notification) return null;

  const styles = {
    success: {
      bg: 'bg-green-100',
      border: 'border-green-400',
      text: 'text-green-700',
      icon: CheckCircle
    },
    error: {
      bg: 'bg-red-100',
      border: 'border-red-400',
      text: 'text-red-700',
      icon: AlertCircle
    },
    info: {
      bg: 'bg-blue-100',
      border: 'border-blue-400',
      text: 'text-blue-700',
      icon: Info
    }
  };

  const style = styles[notification.type];
  const Icon = style.icon;

  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] flex items-center px-4 py-3 rounded-lg border shadow-lg ${style.bg} ${style.border} ${style.text} min-w-[300px] max-w-[90vw] animate-fadeIn transition-all duration-300`}>
      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
      <span className="font-medium text-sm sm:text-base">{notification.message}</span>
    </div>
  );
};

export default Notification;
