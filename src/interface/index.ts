import { TEventState } from "./event";
import { TOperationLogState } from "./operationLog";

export type TRootState = {
  events: TEventState;
  operationLogs: TOperationLogState;
};
