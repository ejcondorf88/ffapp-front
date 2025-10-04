import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  emailUpdates: boolean;
  textUpdates: boolean;
}

interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
  receiptNumber: string;
}

type PaymentMethod = 'card' | 'qr';

interface DonationContextType {
  // Estados del formulario
  donationType: 'once' | 'monthly';
  selectedAmount: number | null;
  customAmount: string;
  showForm: boolean;
  showPayment: boolean;
  showThankYou: boolean;
  formData: FormData;
  paymentMethod: PaymentMethod | null;
  paymentData: PaymentData;

  // Funciones para actualizar estados
  setDonationType: (type: 'once' | 'monthly') => void;
  setSelectedAmount: (amount: number | null) => void;
  setCustomAmount: (amount: string) => void;
  setShowForm: (show: boolean) => void;
  setShowPayment: (show: boolean) => void;
  setShowThankYou: (show: boolean) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setPaymentMethod: (method: PaymentMethod | null) => void;
  setPaymentData: React.Dispatch<React.SetStateAction<PaymentData>>;
  
  // Funciones de utilidad
  getCurrentAmount: () => number;
  resetDonation: () => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};

interface DonationProviderProps {
  children: ReactNode;
}

export const DonationProvider: React.FC<DonationProviderProps> = ({ children }) => {
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    emailUpdates: false,
    textUpdates: false,
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    receiptNumber: ''
  });

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  const resetDonation = () => {
    setSelectedAmount(null);
    setCustomAmount('');
    setDonationType('once');
    setShowForm(false);
    setShowPayment(false);
    setShowThankYou(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      emailUpdates: false,
      textUpdates: false
    });
    setPaymentMethod(null);
    setPaymentData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardName: '',
      receiptNumber: ''
    });
  };

  const value: DonationContextType = {
    donationType,
    selectedAmount,
    customAmount,
    showForm,
    showPayment,
    showThankYou,
    formData,
    paymentMethod,
    paymentData,
    setDonationType,
    setSelectedAmount,
    setCustomAmount,
    setShowForm,
    setShowPayment,
    setShowThankYou,
    setFormData,
    setPaymentMethod,
    setPaymentData,
    getCurrentAmount,
    resetDonation,
  };

  return (
    <DonationContext.Provider value={value}>
      {children}
    </DonationContext.Provider>
  );
};