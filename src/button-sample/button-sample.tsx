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
  function handleMessageClick(): void {
    alert('Hello');
  }

  /**
   * カウントアップボタンクリック。
   */
  function handleCountupClick(): void {
    setClickCount(clickCount + 1);
  }

  return (
    <>
      <h2>Button sample</h2>

      <Button
        variant="contained"
        onClick={handleMessageClick}
      >
        Message
      </Button>

      <Button
        variant="contained"
        onClick={handleCountupClick}
      >
        {clickCount}
      </Button>
    </>
  );

}
