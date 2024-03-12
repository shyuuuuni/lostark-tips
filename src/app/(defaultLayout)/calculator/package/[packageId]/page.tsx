'use client';

import { packages } from '@/app/(defaultLayout)/calculator/package/_lib/package';
import { PackageDetail } from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail';

type Props = {
  params: {
    packageId: string;
  };
};

export default function Page({ params }: Props) {
  const { packageId } = params;
  const pagePackage = packages.find(({ id }) => id === packageId);

  if (pagePackage === undefined) {
    return <div>패키지를 찾을 수 없습니다.</div>;
  }

  return <PackageDetail targetPackage={pagePackage} />;
}
