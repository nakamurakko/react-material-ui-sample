import { useState } from 'react';

import { Button } from '@mui/material';

/**
 * Button サンプルコンポーネント。
 *
 * @returns JSX.Element
 */
export default function ButtonSample(): JSX.Element {

  /** クリックカウント数。 */
  const [clickCount, setClickCount] = useState<number>(0);

  /**
   * メッセージ表示ボタンクリック。
   */
  function onMessageClick(): void {
    alert('Hello');
  }

  /**
   * カウントアップボタンクリック。
   */
  function onCountupClick(): void {
    setClickCount(clickCount + 1);
  }

  return (
    <>
      <h2>Button sample</h2>

      <Button
        variant="contained"
        onClick={onMessageClick}
      >
        Message
      </Button>

      <Button
        variant="contained"
        onClick={onCountupClick}
      >
        {clickCount}
      </Button>
    </>
  );

}
