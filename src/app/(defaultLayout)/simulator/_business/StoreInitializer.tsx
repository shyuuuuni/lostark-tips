'use client';

import { useDetailZoneStore } from '@/app/(defaultLayout)/simulator/_stores/useDetailZoneStore';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import { useLayoutEffect } from 'react';

export default function StoreInitializer() {
  const resetStore = useAdvancedRefiningSimulatorStore((store) => store.reset);
  const closeDetailZone = useDetailZoneStore((store) => store.close);

  useLayoutEffect(() => {
    resetStore();
    closeDetailZone();
  }, [resetStore, closeDetailZone]);

  return <></>;
}
