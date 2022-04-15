import { TEventState } from "./event";
import { TOperationLogState } from "./operationLog";

export type TState = {
  events: TEventState;
  operationLogs: TOperationLogState;
};
