import React, { useContext } from "react";
import OperationLog from "../../../components/OperationLog";
import OperationLogContext from "../features/contexts/OperationLogContext";

const OperationLogs = () => {
  const { operationLogState } = useContext(OperationLogContext);
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="tabel table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {operationLogState.map((operationLog, index) => {
            return <OperationLog key={index} operationLog={operationLog} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
