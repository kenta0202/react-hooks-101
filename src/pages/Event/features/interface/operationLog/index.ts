export const OperationLogCategory = {
  add: "operationLog/add",
  delete: "operationLog/delete",
  deleteAll: "operationLog/deleteAll",
} as const;

export type TOperationLogItem = {
  description: string;
  operatedAt: string;
};

export type TOperationLogState = TOperationLogItem[];

export type TOperationLogAction =
  | {
      type: typeof OperationLogCategory.add;
      payload: { description: string; operatedAt: string };
    }
  | {
      type: typeof OperationLogCategory.delete;
      payload: { description: string; operatedAt: string };
    }
  | {
      type: typeof OperationLogCategory.deleteAll;
    };
