import { FormItemControl } from "@/components/base/ui/form";
import { Input } from "@/components/base/ui/input";
import MultipleSelector from "@/components/base/ui/multi-select";

const InterpretationFormGermline = () => {
  return (
    <>
      <FormItemControl name="name" label="Name">
        <Input />
      </FormItemControl>
      <FormItemControl
        name="classification"
        label="Classification criteria e.g. PM1, PS2"
      >
        <MultipleSelector
          defaultOptions={[
            { label: "nextjs", value: "Nextjs" },
            { label: "Vite", value: "vite", disable: true },
            { label: "Nuxt", value: "nuxt", disable: true },
            { label: "Vue", value: "vue, disable: true", disable: true },
            { label: "Remix", value: "remix" },
            { label: "Svelte", value: "svelte", disable: true },
            { label: "Angular", value: "angular", disable: true },
            { label: "Ember", value: "ember", disable: true },
            { label: "React", value: "react" },
            { label: "Gatsby", value: "gatsby", disable: true },
            { label: "Astro", value: "astro", disable: true },
          ]}
          placeholder="Select frameworks you like..."
          emptyIndicator={
            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
              no results found.
            </p>
          }
        />
      </FormItemControl>
    </>
  );
};

export default InterpretationFormGermline;
