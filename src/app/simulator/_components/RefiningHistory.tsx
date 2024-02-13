'use client';

import styles from './refiningHistory.module.css';

import {
  SimulateHistory,
  useSimulatorStore,
} from '@/app/simulator/_stores/useSimulatorStore';
import dayjs from 'dayjs';
import { expIncrement } from '@/app/simulator/_lib/refiningPercent';
import { josa } from '@toss/hangul';
import { ancestorProtectionInfo } from '@/app/simulator/_lib/ancestorProtection';

const getHistoryComment = (history: SimulateHistory): string => {
  const date = `[${dayjs(history.date).format('HH:mm:ss')}]`;

  let successComment = `상급 재련 ${history.refiningType}!`;
  if (history.refiningType !== '성공') {
    successComment += ` x${expIncrement[history.refiningType]}의 경험치를 획득했습니다.`;
  }

  let ancestorProtectionComment = '';
  if (history.ancestorProtection !== null) {
    ancestorProtectionComment += `선조의 가호 효과로 ${josa(history.ancestorProtection, '이/가')} 적용되었습니다. ${ancestorProtectionInfo[history.ancestorProtection]}!`;
  }

  const nextLevel = history.baseLevel + Math.floor(history.expTo / 100);
  const levelUpComment = `[${history.baseLevel}단계(${history.expFrom}%) > ${nextLevel}단계(${Math.floor(history.expTo % 100)}%)]`;

  return `${date} ${levelUpComment} ${successComment} ${ancestorProtectionComment}`;
};

export default function RefiningHistory() {
  const histories = useSimulatorStore((store) => store.history);

  return (
    <div className={styles.container}>
      <div className={styles.title}>재련 히스토리</div>
      <div className={styles.list}>
        {histories.toReversed().map((history) => (
          <div key={history.id}>{getHistoryComment(history)}</div>
        ))}
      </div>
    </div>
  );
}
