'use client';

import { packages } from '@/app/(defaultLayout)/calculator/package/_lib/package';
import Package from '@/app/(defaultLayout)/calculator/package/_components/Package';

// TODO: zustand persist 상태로 관리
const myPackages = [...packages];

export default function Test() {
  return (
    <>
      {myPackages.map((_package) => (
        <Package key={_package.name} targetPackage={_package} />
      ))}
    </>
  );
}
