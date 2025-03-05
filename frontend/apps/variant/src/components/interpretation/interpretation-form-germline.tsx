import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/base/ui/form";
import MultipleSelector from "@/components/base/multi-selector/multi-selector";
import { classificationCriterias, getTransmissionModes } from "./data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/base/ui/select";
import { useFormContext } from "react-hook-form";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/base/ui/toggle-group";
import { InterpretationGermline } from "@/api/api";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip";

const InterpretationFormGermline = () => {
  const form = useFormContext<InterpretationGermline>();

  return (
    <>
      <FormField
        control={form.control}
        name="condition"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Condition</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Find a condition" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="m@example.com">m@example.com</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
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
                className="flex-wrap justify-start"
                {...field}
              >
                <ToggleGroupItem
                  value="LA6668-3"
                  className="data-[state=on]:bg-primary-200 data-[state=on]:text-primary-900 border data-[state=on]:border-primary-300"
                >
                  Pathogenic
                </ToggleGroupItem>
                <Tooltip>
                  <TooltipTrigger>
                    <ToggleGroupItem
                      value="LA26332-9"
                      className="data-[state=on]:bg-primary-200 data-[state=on]:text-primary-900 border data-[state=on]:border-primary-300"
                    >
                      Likely Pathogenic
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>Probably pathogenic</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <ToggleGroupItem
                      value="LA26333-7"
                      className="data-[state=on]:bg-primary-200 data-[state=on]:text-primary-900 border data-[state=on]:border-primary-300"
                    >
                      VUS
                    </ToggleGroupItem>
                  </TooltipTrigger>
                  <TooltipContent>
                    Variant of Uncertain Significance
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <ToggleGroupItem
                    value="LA26334-5"
                    className="data-[state=on]:bg-primary-200 data-[state=on]:text-primary-900 border data-[state=on]:border-primary-300"
                  >
                    Likely Benign
                  </ToggleGroupItem>
                  <TooltipContent>Probably benign</TooltipContent>
                </Tooltip>
                <ToggleGroupItem
                  value="LA6675-8"
                  className="data-[state=on]:bg-primary-200 data-[state=on]:text-primary-900 border data-[state=on]:border-primary-300"
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
    </>
  );
};

export default InterpretationFormGermline;
