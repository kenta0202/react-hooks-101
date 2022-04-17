import { createContext } from "react";
import {
  TOperationLogAction,
  TOperationLogState,
} from "../interface/operationLog";

const OperationLogContext = createContext<{
  operationLogState: TOperationLogState;
  operationLogDispatch: (action: TOperationLogAction) => void;
}>({
  operationLogState: [],
  operationLogDispatch: () => {},
});

export default OperationLogContext;
