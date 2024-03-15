export const metadata = {
  title: '寬堂設計 | 隱私權政策',
  robot:{
    index:false,
    follow:true
  }
};
import React from 'react';
import PrivacyPolicy from '@/src/components/layouts/privacy-policy';

export default function ProcessChargePage() {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
}
