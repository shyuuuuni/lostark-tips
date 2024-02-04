'use client';

import styles from './itemLevelZone.module.css';
import {
  BaseLevel,
  baseLevels,
  useSimulatorStore,
} from '@/app/simulator/_stores/useSimulatorStore';
import { useId } from 'react';
import Select, { components } from 'react-select';

type LevelSelectOption = { value: BaseLevel; label: string };

const levelSelectOptions: LevelSelectOption[] = baseLevels.map((baseLevel) => ({
  value: baseLevel,
  label: `${baseLevel}단계`,
}));
export default function ItemLevelZone() {
  const [baseLevel, setBaseLevel] = useSimulatorStore((store) => [
    store.baseLevel,
    store.setBaseLevel,
  ]);

  // react-select 컴포넌트의 Hydration 시 id did not match 오류 방지
  const baseLevelId = useId();

  const onChangeSelect = (option: LevelSelectOption | null) => {
    if (option === null) {
      return;
    }
    setBaseLevel(option.value);
  };

  return (
    <div className={styles.itemLevelZone}>
      <Select
        className={styles.levelSelect}
        instanceId={baseLevelId}
        options={levelSelectOptions}
        defaultValue={levelSelectOptions[baseLevel]}
        onChange={onChangeSelect}
        components={{
          Input: (props) => (
            <components.Input {...props} aria-activedescendant={undefined} />
          ),
        }}
        styles={{
          container: () => ({
            position: 'absolute',
            width: '100%',
            zIndex: 1,
          }),
          control: () => ({ visibility: 'hidden' }),
          menu: () => ({ marginTop: '-32px' }),
        }}
      />
      <div className={styles.levels}>
        <span>{baseLevel}단계</span> {`>>`} <span>{baseLevel + 1}단계</span>
      </div>
    </div>
  );
}