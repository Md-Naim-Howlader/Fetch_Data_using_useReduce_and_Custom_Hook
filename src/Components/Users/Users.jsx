import useFetch from "../../Hooks/useFetch";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import User from "../User/User";

const Users = () => {
  const { state, dispatch } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { isError, isLoading, data } = state;

  return (
    <div>
      {isError && <Error error={isError} />}
      {isLoading && <Loading />}
      <div className="users">
        {data &&
          data.map((user) => (
            <User dispatch={dispatch} key={user.id} user={user} />
          ))}
      </div>
    </div>
  );
};

export default Users;
