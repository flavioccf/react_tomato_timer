import { FormContainer, TaskInpunt, MinuteAmountInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">I'm gonna work on</label>
      <TaskInpunt
        id="task"
        list="task-suggestions"
        placeholder="Give a name for your project"
        {...register("task")}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Project 1"></option>
        <option value="Project 2"></option>
        <option value="Project 3"></option>
        <option value="Project 4"></option>
      </datalist>
      <label htmlFor="minutesAmount">for</label>
      <MinuteAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        min={1}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
        disabled={!!activeCycle}
      />
      <span>minutes.</span>
    </FormContainer>
  );
}
