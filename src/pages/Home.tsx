import Table from "react-bootstrap/Table";
import userData from "../data/users.json";
import { IUser } from "../types";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user";

export const Home = () => {
  const users: IUser[] = userData;
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  function redirectToTimesheets(user: IUser) {
    navigate(`/timesheets/${user.id}`);
    setUser(user);
  }

  return (
    <div className="pageContainer">
      <h2 className="text-center mb-5">Employee list</h2>
      <Table
        bordered
        hover
        responsive="md"
        size="sm"
        className="table align-middle"
      >
        <thead className="table align-middle text-center background-header">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Phone</th>
            <th>Manager</th>
            <th>Manager Email</th>
            <th>Manager Phone</th>
            <th>Manager Position</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => redirectToTimesheets(user)}
              className="timesheets-link"
            >
              <td>{`${user.firstName} ${user.lastName}`}</td>

              <td>{user.email}</td>
              <td>{user.position}</td>
              <td>{user.phone}</td>
              <td>
                {user.manager
                  ? `${user.manager?.firstName} ${user.manager?.lastName}`
                  : ""}
              </td>
              <td>{user.manager?.email}</td>
              <td>{user.manager?.phone}</td>
              <td>{user.manager?.position}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
