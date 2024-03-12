type Props = {
  params: {
    packageId: string;
  };
};

export default function Page({ params }: Props) {
  return <div>{params.packageId}</div>;
}
