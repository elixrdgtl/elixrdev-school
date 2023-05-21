'use client'

import ExButton, { ButtonType } from '@/components/basic-ui/button';
import ExDialog from '@/components/basic-ui/dialog'
import { useState } from 'react';

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div>
      <ExButton buttonType={ButtonType.OK} onClick={() => { setShowDialog((val)=>!val)}}>test</ExButton>
      <ExButton buttonType={ButtonType.DEFAULT} onClick={() => { setShowDialog((val)=>!val)}}>test</ExButton>
      <ExButton buttonType={ButtonType.WARNING} onClick={() => { setShowDialog((val)=>!val)}}>test</ExButton>
      
      <ExDialog title="Dialog" open={showDialog} set={setShowDialog}>
        <div>
          sdhgfikjsdhfkjsdhfkjsdhfkjsdhfjksdhfkjsdhfksjhyfiweusjfhnkxzdjfhsdjkfndksjfhksjdhfjksd
        </div>
      </ExDialog>
    </div>
  )
}
