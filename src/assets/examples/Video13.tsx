export interface IPerson {
  name?: string,
  age?: number,
  city?: string
}
const Video13 = (props: IPerson) => {
  const { name, age, city } = props
  return (
    <div>
      {name} - {age} - {city}
    </div>
  )
}

export default Video13
