import { Table, Dropdown } from "react-bootstrap";
import { useUserContext } from "../context/user";
import timesheetsData from "../data/timesheets.json";
import { useEffect, useState } from "react";
import { getDate, getTime, getWeekDay, getMonth } from "../utils/date";

export const Timesheets = () => {
  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { user } = useUserContext();
  const userTimesheetsData = timesheetsData.filter(
    (item) => item.userId === user?.id
  );
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [filterTimesheetsData, setFilterTimesheetsData] =
    useState(userTimesheetsData);

  const handleFilterByMonth = () => {
    selectedMonth === "All"
      ? setFilterTimesheetsData(userTimesheetsData)
      : setFilterTimesheetsData(
          userTimesheetsData.filter(
            (item) => getMonth(item.startTime) === selectedMonth
          )
        );
  };

  useEffect(() => {
    handleFilterByMonth();
  }, [selectedMonth]);

  return user ? (
    <div className="pageContainer">
      <header className="mb-5 timesshets-header">
        <div>
          <div className="mb-4">
            <p className="h5">
              Employee Name:{" "}
              <strong>{`${user?.firstName} ${user?.lastName}`} </strong>
            </p>
          </div>
          {user.manager && (
            <div>
              <p className="h5">
                Manager Name:{" "}
                <strong>{`${user?.manager?.firstName} ${user?.manager?.lastName}`}</strong>
              </p>
            </div>
          )}
        </div>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" variant="secondary">
            {selectedMonth}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {months.map((item) => (
              <Dropdown.Item onClick={() => setSelectedMonth(item)}>
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </header>
      {!filterTimesheetsData.length ? (
        <h4 className="text-center mt-2">No data for the selected period</h4>
      ) : (
        <Table
          bordered
          hover
          responsive="md"
          className="table align-middle text-center"
        >
          <thead className="table align-middle background-header">
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Break Minutes</th>
              <th>Total Minutes</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {filterTimesheetsData.map((timesheet) => (
              <tr key={timesheet.id}>
                <td className="font">{getDate(timesheet.startTime)}</td>
                <td>{getWeekDay(timesheet.startTime)}</td>
                <td>{getTime(timesheet.startTime)}</td>
                <td>{getTime(timesheet.endTime)}</td>
                <td>{timesheet.breakMinutes}</td>
                <td>{timesheet.minutes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  ) : (
    <h4 className="text-center mt-2">Loading...</h4>
  );
};
