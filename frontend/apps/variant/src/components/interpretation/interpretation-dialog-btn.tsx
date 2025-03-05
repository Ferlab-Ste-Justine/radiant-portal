import { Button } from "@/components/base/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/ui/dialog";
import { Separator } from "@/components/base/ui/separator";
import { Alert, AlertDescription } from "@/components/base/ui/alert";
import { Edit2Icon, InfoIcon } from "lucide-react";
import InterpretationFormGermline from "./interpretation-form-germline";
import InterpretationFormGeneric from "./interpretation-form-generic";
import { Form, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MultipleSelector from "@/components/base/ui/multi-select";
import { Input } from "@/components/base/ui/input";
import { Badge } from "@/components/base/ui/badge";

// have a schema for generic
// and one for each somatic and gerlime that extends the generic one
const formSchema = z.object({});

const InterpretationDialogBtn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Save interpretation
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" size="xs">
          <Edit2Icon /> Interpret
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100vw-48px)] w-[1200px]">
        <div className="flex flex-col">
          <DialogHeader>
            <DialogTitle>Clinical Interpretation</DialogTitle>
          </DialogHeader>
          <Separator className="mt-6" />
          <div className="py-6 overflow-scroll space-y-6 h-[calc(95vh-160px)]">
            <Alert variant="info" className="flex gap-2 items-center">
              <div>
                <InfoIcon size={16} />
              </div>
              <AlertDescription className="text-foreground">
                Last update: <strong>René Allard</strong> (March 4, 2025, 8h53)
              </AlertDescription>
            </Alert>
            <div className="grid gap-6 grid-cols-12">
              <div className="col-span-7 border p-6 bg-gray-50">
                {/* add check to know if somatic or germline */}
                <FormProvider {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <InterpretationFormGermline />
                    <InterpretationFormGeneric />
                  </form>
                </FormProvider>
              </div>
              <div className="col-span-5 border py-4 px-6"></div>
            </div>
          </div>
          <Separator className="mb-6" />
          <DialogFooter>
            <Button variant="primary">Save</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InterpretationDialogBtn;
