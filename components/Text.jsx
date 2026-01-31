"use client"
import React from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const Text = () => {
  const handleClick = (mode)=>{
    mode ? toast.success("Test Successs") : toast.error("Test Failed")
  }
  return (
    <div>
        This is the page
        <Button onclassName="bg-red-600" onClick={()=> handleClick(false)}>Button</Button>
        
    </div>
  );
};

export default Text;