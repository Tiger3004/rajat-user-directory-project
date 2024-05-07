import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { UserContext } from "../../context/UserContext";

const UserDetailsView = () => {
  const { userId } = useParams();
  const { users } = useContext(UserContext);

  const user = users.find((user) => user.id === parseInt(userId));

  return (
    <div>
      {user ? (
        <div>
          <Typography variant="h4">{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant="body1">{`Address: ${user.address}`}</Typography>
          <Typography variant="body1">{`Phone Number: ${user.phoneNumber}`}</Typography>
          <Typography variant="body1">{`Age: ${user.age}`}</Typography>
          <Typography variant="body1">{`Gender: ${user.gender}`}</Typography>
        </div>
      ) : (
        <Typography variant="h4">User not found</Typography>
      )}
    </div>
  );
};

export default UserDetailsView;
