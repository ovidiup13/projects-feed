import React, { useState, useEffect } from 'react';

import styles from './ReportButton.module.css';

const ReportButton: React.FunctionComponent = () => {
  const [width, setWidth] = useState(0);

  const setButtonMaxWidth = () => {
    const appElement = document.querySelector('.app');
    setWidth(appElement?.clientWidth!);
  };

  // This is so bad.
  useEffect(() => {
    window.addEventListener('resize', setButtonMaxWidth);
    setButtonMaxWidth();
  }, []);

  return (
    <button
      className={styles.report}
      style={{
        maxWidth: width,
      }}
    >
      report project
    </button>
  );
};

export default ReportButton;
