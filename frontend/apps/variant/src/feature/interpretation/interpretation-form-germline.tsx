import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/base/ui/form';
import MultipleSelector from '@/components/base/data-entry/multi-selector/multi-selector';
import { classificationCriterias, getClassificationCriteriaColor, getTransmissionModes } from './data';
import { FormProvider, useForm } from 'react-hook-form';
import { ToggleGroup, ToggleGroupItem } from '@/components/base/ui/toggle-group';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/base/ui/tooltip';
import { germlineInterpretationFormSchema, GermlineInterpretationSchemaType } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import InterpretationFormGeneric from './interpretation-form-generic';
import { Badge } from '@/components/base/ui/badge';
import MondoAutoCompleteFormField from './mondo-auto-complete-form-field';

function InterpretationFormGermline() {
  const form = useForm<GermlineInterpretationSchemaType>({
    resolver: zodResolver(germlineInterpretationFormSchema),
    defaultValues: {},
    reValidateMode: 'onChange',
    shouldFocusError: false,
  });

  function onSubmit(values: GermlineInterpretationSchemaType) {
    // Save interpretation
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <MondoAutoCompleteFormField name="condition" label="Mondo condition" placeholder="e.g. muscular dystrophy" />
        <FormField
          control={form.control}
          name="classification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Classification</FormLabel>
              <FormControl>
                <ToggleGroup
                  type="single"
                  size="default"
                  variant="outline"
                  className="flex-wrap justify-start"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <ToggleGroupItem
                    value="LA6668-3"
                    className="bg-white hover:bg-white data-[state=on]:bg-red-100 data-[state=on]:text-red-800 border data-[state=on]:border-red-200"
                  >
                    Pathogenic
                  </ToggleGroupItem>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>
                        <ToggleGroupItem
                          value="LA26332-9"
                          className="bg-white hover:bg-white data-[state=on]:bg-volcano-100 data-[state=on]:text-volcano-800 border data-[state=on]:border-volcano-300"
                        >
                          Likely Pathogenic
                        </ToggleGroupItem>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Probably pathogenic</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>
                        <ToggleGroupItem
                          value="LA26333-7"
                          className="bg-white hover:bg-white data-[state=on]:bg-orange-100 data-[state=on]:text-orange-900 border data-[state=on]:border-orange-300"
                        >
                          VUS
                        </ToggleGroupItem>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Variant of Uncertain Significance</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>
                        <ToggleGroupItem
                          value="LA26334-5"
                          className="bg-white hover:bg-white data-[state=on]:bg-lime-100 data-[state=on]:text-lime-900 border data-[state=on]:border-lime-300"
                        >
                          Likely Benign
                        </ToggleGroupItem>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Probably benign</TooltipContent>
                  </Tooltip>
                  <ToggleGroupItem
                    value="LA6675-8"
                    className="bg-white hover:bg-white data-[state=on]:bg-green-100 data-[state=on]:text-green-800 border data-[state=on]:border-green-300"
                  >
                    Benign
                  </ToggleGroupItem>
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="classification_criterias"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Classification criteria e.g. PM1, PS2</FormLabel>
              <FormControl>
                <MultipleSelector
                  defaultOptions={classificationCriterias}
                  placeholder="Classification criteria"
                  emptyIndicator={<>no results found.</>}
                  renderBadge={({ option, onRemove }) => {
                    const tagColor = getClassificationCriteriaColor(option.value);

                    return (
                      <Badge
                        key={option.value}
                        variant="filled"
                        data-fixed={option.fixed}
                        onClose={onRemove}
                        style={{
                          color: `hsl(var(--${tagColor}-9))`,
                          backgroundColor: `hsl(var(--${tagColor}-3))`,
                        }}
                        closeIconProps={{
                          style: { color: `hsl(var(--${tagColor}-9))` },
                        }}
                      >
                        {option.label}
                      </Badge>
                    );
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="transmission_modes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mode of inheritance</FormLabel>
              <FormControl>
                <MultipleSelector
                  defaultOptions={getTransmissionModes()}
                  placeholder="Select"
                  emptyIndicator={<p>no results found.</p>}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <InterpretationFormGeneric />
      </form>
    </FormProvider>
  );
}

export default InterpretationFormGermline;
