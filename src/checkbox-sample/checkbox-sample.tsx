import { useState } from 'react';

import { Checkbox } from '@mui/material';

/**
 * Checkbox サンプルコンポーネント。
 *
 * @returns JSX.Element
 */
export default function CheckboxSample(): JSX.Element {

  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <h2>Checkbox sample</h2>

      <Checkbox
        value={isChecked}
        onChange={
          (event, checked): void => {
            setIsChecked(checked);
          }
        }
      />
      <span>{String(isChecked)}</span>
    </>
  );

}
