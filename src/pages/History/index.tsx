import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20min</td>
              <td>1h ago</td>
              <td>
                <Status statusColor="green">Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20min</td>
              <td>1h ago</td>
              <td>
                <Status statusColor="green">Finished</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20min</td>
              <td>1h ago</td>
              <td>
                <Status statusColor="red">Stopped</Status>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20min</td>
              <td>1h ago</td>
              <td>
                <Status statusColor="yellow">Ongoing</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
