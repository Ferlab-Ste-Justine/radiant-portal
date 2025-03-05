import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/base/ui/form";
import RichTextEditor from "@/components/base/rich-text-editor/rich-text-editor";
import { useFormContext } from "react-hook-form";
import { InterpretationGermline, InterpretationSomatic } from "@/api/api";

const InterpretationFormGeneric = () => {
  const form = useFormContext<InterpretationGermline | InterpretationSomatic>();

  return (
    <>
      <FormField
        control={form.control}
        name="interpretation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Interpretation</FormLabel>
            <FormControl>
              <RichTextEditor {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default InterpretationFormGeneric;
