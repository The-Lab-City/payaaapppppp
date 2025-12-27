import { useState } from 'react';
import { Bell, Check, CreditCard, AlertTriangle, TrendingUp, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Notification {
  id: string;
  type: 'payment' | 'alert' | 'info' | 'success';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const NotificationsDropdown = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'payment',
      title: 'Payment Received',
      message: 'You received $250.00 from Alex Johnson',
      time: '2 min ago',
      read: false,
    },
    {
      id: '2',
      type: 'alert',
      title: 'Unusual Activity',
      message: 'We detected a login from a new device',
      time: '1 hour ago',
      read: false,
    },
    {
      id: '3',
      type: 'success',
      title: 'Subscription Renewed',
      message: 'Your Pro plan has been renewed for another month',
      time: '3 hours ago',
      read: false,
    },
    {
      id: '4',
      type: 'info',
      title: 'New Feature',
      message: 'Check out our new analytics dashboard',
      time: '1 day ago',
      read: true,
    },
    {
      id: '5',
      type: 'payment',
      title: 'Payment Sent',
      message: 'You sent $1,200.00 to Sarah Williams',
      time: '2 days ago',
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return <CreditCard className="w-4 h-4" />;
      case 'alert':
        return <AlertTriangle className="w-4 h-4" />;
      case 'success':
        return <Check className="w-4 h-4" />;
      case 'info':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'payment':
        return 'bg-primary/20 text-primary';
      case 'alert':
        return 'bg-destructive/20 text-destructive';
      case 'success':
        return 'bg-green-500/20 text-green-500';
      case 'info':
        return 'bg-blue-500/20 text-blue-500';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative gap-2">
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-80 bg-card border-border shadow-elevated z-50"
      >
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs h-auto py-1"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[300px]">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`p-3 cursor-pointer focus:bg-secondary/50 ${
                  !notification.read ? 'bg-primary/5' : ''
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex gap-3 w-full">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getIconBg(notification.type)}`}>
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium text-sm truncate">{notification.title}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto p-1 opacity-0 group-hover:opacity-100 hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeNotification(notification.id);
                        }}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.time}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  )}
                </div>
              </DropdownMenuItem>
            ))
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropdown;