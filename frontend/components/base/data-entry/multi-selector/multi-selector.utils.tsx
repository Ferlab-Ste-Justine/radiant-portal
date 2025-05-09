import {
  MultiSelectorGroupOption,
  MultiSelectorOption,
} from "./multi-selector.types";

export function transToGroupOption(
  options: MultiSelectorOption[],
  groupBy?: string
) {
  if (options.length === 0) {
    return {};
  }
  if (!groupBy) {
    return {
      "": options,
    };
  }

  const groupOption: MultiSelectorGroupOption = {};
  options.forEach((option) => {
    const key = (option[groupBy] as string) || "";
    if (!groupOption[key]) {
      groupOption[key] = [];
    }
    groupOption[key].push(option);
  });
  return groupOption;
}

export function getSelectedOptionByValue(
  value: string[],
  options: MultiSelectorOption[]
): MultiSelectorOption[] {
  return options.filter((option) => value.includes(option.value));
}

export function isOptionsExist(
  groupOption: MultiSelectorGroupOption,
  targetOption: MultiSelectorOption[]
) {
  for (const [, value] of Object.entries(groupOption)) {
    if (
      value.some((option) => targetOption.find((p) => p.value === option.value))
    ) {
      return true;
    }
  }
  return false;
}
