import { initalState } from "../..";
import {
  OperationLogCategory,
  TOperationLogAction,
  TOperationLogItem,
  TOperationLogState,
} from "../../../../interface/operationLog";

export const operationLogReducer = (
  state = [] as TOperationLogState,
  // state = initalState.operationLogs as TOperationLogState,
  action: TOperationLogAction
) => {
  switch (action.type) {
    case OperationLogCategory.add:
      const operationLogs: TOperationLogItem = {
        description: action.payload.description!,
        operatedAt: action.payload.operatedAt!,
      };
      return [operationLogs, ...state];
    case OperationLogCategory.deleteAll:
      return [];
    default:
      const typecheck: never = action;
      return typecheck;
  }
};
