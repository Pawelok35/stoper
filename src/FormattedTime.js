import React from 'react';
import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millisecondsPart = milliseconds % 1000;

    const formattedTime = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}.${('00' + millisecondsPart).slice(-3)}`;

    return formattedTime;
  };

  return (
    <div className={styles.component}>
      {formatTime(time)}
    </div>
  );
};

export default FormattedTime;