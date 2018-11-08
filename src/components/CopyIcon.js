// @flow

import React, {useEffect, useRef} from 'react';
import IconButton from '@material-ui/core/IconButton';
import {ContentCopy} from 'mdi-material-ui'
import Clipboard from 'clipboard';

type CopyIconPropType = {
  copyVal: string,
  ariaLabel?: string
}

export default function CopyIcon(props: CopyIconPropType) {
  const {copyVal, ariaLabel = 'Copy Color to Clipboard'} = props;
  const button = useRef(null);

  useEffect(() => {
    const clipboard = new Clipboard(button.current, {
        text: trigger => trigger.getAttribute('clipboard-text')
      }
    );
    return () => {
      clipboard.destroy();
    }
  }, [button]);

  return (
    <IconButton aria-label={ariaLabel} color="inherit" buttonRef={button}
                clipboard-text={copyVal}>
      <ContentCopy/>
    </IconButton>
  );
}
