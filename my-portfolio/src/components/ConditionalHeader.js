import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

const ConditionalHeader = () => {
  const location = useLocation();
  return location.pathname !== '/sp' ? <Header /> : null;
};

export default ConditionalHeader;