import { Occurrence } from '@/api/api';
import { Button } from '@/components/base/ui/button';
import { SquareArrowOutUpRightIcon } from 'lucide-react';

type InterpretationVariantHeaderProps = {
  occurrence: Occurrence;
};

function InterpretationVariantHeader({ occurrence }: InterpretationVariantHeaderProps) {
  return (
    <div className="flex items-center">
      <Button variant="link" className="px-0">
        <a href="#" className="flex text-lg gap-2 font-medium items-center justify-center outline-none">
          <span className="max-w-72 overflow-hidden text-ellipsis">{occurrence.hgvsg}</span>
          <SquareArrowOutUpRightIcon />
        </a>
      </Button>
    </div>
  );
}

export default InterpretationVariantHeader;
