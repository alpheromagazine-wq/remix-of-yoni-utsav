import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OrderDialogContextType {
  isOpen: boolean;
  openOrderDialog: () => void;
  closeOrderDialog: () => void;
}

const OrderDialogContext = createContext<OrderDialogContextType | undefined>(undefined);

export const OrderDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOrderDialog = () => setIsOpen(true);
  const closeOrderDialog = () => setIsOpen(false);

  return (
    <OrderDialogContext.Provider value={{ isOpen, openOrderDialog, closeOrderDialog }}>
      {children}
    </OrderDialogContext.Provider>
  );
};

export const useOrderDialog = () => {
  const context = useContext(OrderDialogContext);
  if (!context) {
    throw new Error('useOrderDialog must be used within an OrderDialogProvider');
  }
  return context;
};
