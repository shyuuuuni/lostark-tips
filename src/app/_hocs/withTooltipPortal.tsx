import TooltipPortal from '@/app/_components/TooltipPortal';
import { jsx } from '@emotion/react';
import IntrinsicAttributes = jsx.JSX.IntrinsicAttributes;

export default function withTooltipPortal<P extends IntrinsicAttributes>(
  TooltipComponent: React.ComponentType<P>,
) {
  const Component = (props: P) => {
    return (
      <TooltipPortal>
        <TooltipComponent {...props} />
      </TooltipPortal>
    );
  };

  return Component;
}
