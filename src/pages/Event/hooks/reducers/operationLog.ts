import {
  OperationLogCategory,
  TOperationLogAction,
  TOperationLogState,
} from "../../../../interface/operationLog";

export const operationLogReducer = (
  state = [] as TOperationLogState,
  action: TOperationLogAction
) => {
  switch (action.type) {
    case OperationLogCategory.add:
      const operationLogs = {
        description: action.payload.description,
        operationLog: action.payload.description,
      };
      return [operationLogs, ...state];
    case OperationLogCategory.deleteAll:
      return [];
    default:
      return state;
  }
};
