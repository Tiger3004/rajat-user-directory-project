import { createContext, useState } from "react";
import { usersData } from "../data/Data";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    gender: "",
  });

  const filteredUsers = users.filter((user) => {
    const { firstName, lastName, phoneNumber, address, gender } = filters;
    return (
      user.firstName.toLowerCase().includes(firstName.toLowerCase()) &&
      user.lastName.toLowerCase().includes(lastName.toLowerCase()) &&
      user.phoneNumber.includes(phoneNumber) &&
      user.address.toLowerCase().includes(address.toLowerCase()) &&
      user.gender.toLowerCase().includes(gender.toLowerCase())
    );
  });

  const setFilter = (newFilter) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilter }));
  };

  return (
    <UserContext.Provider value={{ users, filteredUsers, setFilter }}>
      {children}
    </UserContext.Provider>
  );
};
