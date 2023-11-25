export type address = {
  street: string;
  city: string;
  country: string;
};
export type fullName = {
  firstName: string;
  lastName: string;
};
export type user = {
  userId: number;
  fullName: fullName;
  username: string;
  password: string;
  age: number;
  email: string;
  isActive: "active" | "blocked";
  hobbies: string[];
  address: address;
};
