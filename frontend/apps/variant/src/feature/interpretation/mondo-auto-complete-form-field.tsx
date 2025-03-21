import { useCallback } from 'react';
import { GermlineInterpretationSchemaType, SomaticInterpretationSchemaType } from './types';
import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/base/ui/form';
import { AutoComplete, Option } from '@/components/base/data-entry/auto-complete';
import { SquareArrowOutUpRightIcon } from 'lucide-react';
import { debounce } from '@/components/hooks/useDebounce';
import { Button } from '@/components/base/ui/button';

type MondoAutoCompleteFormFieldProps = {
  name: keyof GermlineInterpretationSchemaType | keyof SomaticInterpretationSchemaType;
  label: string;
  placeholder: string;
};

function MondoAutoCompleteFormField({ name, label, placeholder }: MondoAutoCompleteFormFieldProps) {
  const form = useFormContext();

  const handleSearch = useCallback(async (searchValue: string): Promise<Option[]> => {
    if (searchValue) {
      return [
        {
          label: '',
          value: '',
        },
      ];
    }

    return [];
  }, []);

  const debouncedSearch = useCallback(
    debounce(value => handleSearch(value), 500),
    [],
  );

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            infoCardContent={
              <div className="leading-6">
                Search for a medical condition in{' '}
                <Button variant="link" size="sm">
                  <a
                    target="_blank"
                    href="https://www.ebi.ac.uk/ols4/ontologies/mondo"
                    className="flex gap-1 items-center outline-none"
                  >
                    MONDO ontology
                    <SquareArrowOutUpRightIcon />
                  </a>
                </Button>
              </div>
            }
          >
            {label}
          </FormLabel>
          <FormControl>
            <AutoComplete
              placeholder={placeholder}
              onSearch={async value => {
                if (value.length >= 3) {
                  return debouncedSearch(value);
                }

                return [];
              }}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default MondoAutoCompleteFormField;
