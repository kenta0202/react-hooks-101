//   ActionCreator

import { TOperationLogAction } from "../interface/operationLog";

export const createOperationLog = (
  description: string,
  operatedAt: string
): TOperationLogAction => ({
  type: "operationLog/add",
  payload: { description, operatedAt },
});

export const delete_allOperationLog = (): TOperationLogAction => ({
  type: "operationLog/deleteAll",
});
