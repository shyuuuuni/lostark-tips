'use client';

import styles from './itemLevelZone.module.css';

import { useId } from 'react';
import Select, { components } from 'react-select';
import { useSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useSimulatorStore';
import {
  AdvancedRefiningLevel,
  advancedRefiningLevel,
} from '@/type/advancedRefining';

type LevelSelectOption = { value: AdvancedRefiningLevel; label: string };

const levelSelectOptions: LevelSelectOption[] = advancedRefiningLevel
  .filter((baseLevel) => baseLevel < 20)
  .map((baseLevel) => ({
    value: baseLevel,
    label: `${baseLevel}단계`,
  }));

export default function ItemLevelZone() {
  const isMaxLevel = useSimulatorStore((store) => store.isMaxLevel);
  const [targetLevel, setTargetLevel] = useSimulatorStore((store) => [
    store.targetLevel,
    store.setTargetLevel,
  ]);

  // react-select 컴포넌트의 Hydration 시 id did not match 오류 방지
  const baseLevelId = useId();

  const onChangeSelect = (option: LevelSelectOption | null) => {
    if (option === null) {
      return;
    }
    setTargetLevel(option.value);
  };

  return (
    <div className={styles.itemLevelZone}>
      <Select
        className={styles.levelSelect}
        instanceId={baseLevelId}
        options={levelSelectOptions}
        defaultValue={levelSelectOptions[targetLevel]}
        onChange={onChangeSelect}
        components={{
          Input: (props) => (
            <components.Input
              {...props}
              aria-activedescendant={undefined}
              readOnly={true}
            />
          ),
        }}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            cursor: 'pointer',
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            '& > input': {
              cursor: 'pointer',
            },
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            visibility: 'hidden',
            cursor: 'pointer',
            ':focus': {
              cursor: 'pointer',
            },
          }),
          // control visibility hidden 과 같이 사용하면 menu 열리지 않는 버그 발생
          indicatorsContainer: () => ({
            display: 'none',
          }),
        }}
      />
      <div className={styles.levels}>
        {isMaxLevel() ? (
          <span>{targetLevel}단계 상급 재련 완료</span>
        ) : (
          <>
            <span>{targetLevel}단계 상급 재련</span>
          </>
        )}
      </div>
    </div>
  );
}
