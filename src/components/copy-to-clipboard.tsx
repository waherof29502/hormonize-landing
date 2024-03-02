'use client';
import React, { useState } from 'react';

export default function CopyToClipboard({ text }: any) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    setCopied(true);

    navigator.clipboard.writeText(text).then(
      () => {
        // console.log('copied');
      },
      (err) => {
        console.error(err);
      }
    );

    setTimeout(() => {
      setCopied(false);
    }, 500);
  };
  return <div>copy-to-clipboard</div>;
}
