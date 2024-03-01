import { redirect } from 'next/navigation';

export default function Simulator() {
  // layout.tsx 내 links의 첫 번째 URL에 적용하는 것이 좋음
  return redirect('/simulator/advanced_honing');
}
