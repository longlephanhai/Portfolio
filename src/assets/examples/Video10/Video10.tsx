import { useState } from "react";
import './Video10.css'

export interface IUser {
  name: string,
  age: number | string,
  city: string
}
interface IProps {
  defaultName: string,
  defaultAge: number
}
const Video10 = (props: IProps) => {
  const { defaultName, defaultAge } = props;
  const [name, setName] = useState<string>(defaultName);
  const [age, setAge] = useState<number | string>(defaultAge);
  const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
  const [selectedCity, setSelectedCity] = useState<string>("Hà Nội");

  const [users, setUsers] = useState<IUser[]>([])

  const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    const user: IUser = {
      name: name,
      age: age,
      city: selectedCity
    }
    setUsers([...users, user]) // spread syntax
    setName("")
    setAge("")
  }
  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <>
      <div>Example video 10:  hello world </div>
      <div className="form-user">
        <div>
          <label >Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={handleOnChangeName}
          /><br />
        </div>
        <div>
          <label >Age:</label><br />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          /><br />
        </div>
        <div>
          <label >City:</label><br />
          <select onChange={(e) => setSelectedCity(e.target.value)}>
            {
              city.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }
          </select>
        </div>

        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
      </div>
      <hr />
      <div>List Users:</div>
      <div className="table-user">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {
              users !== null && users.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Video10;