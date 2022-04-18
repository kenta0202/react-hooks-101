import React from "react";
import { TOperationLogItem } from "../../pages/Event/features/interface/operationLog";

const OperationLog: React.VFC<{
  operationLog: TOperationLogItem;
}> = ({ operationLog }) => {
  return (
    <tr>
      <th>{operationLog.description}</th>
      <th>{operationLog.operatedAt}</th>
    </tr>
  );
};

export default OperationLog;
