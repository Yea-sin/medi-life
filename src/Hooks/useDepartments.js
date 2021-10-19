import { useEffect, useState } from "react";

const useDepartments = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    fetch("./departments.json")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);
  return [departments];
};
export default useDepartments;
