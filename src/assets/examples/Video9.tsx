import { useState } from "react";

const Video9 = () => {
  const [name, setName] = useState<string>("Long");
  
  return (
    <div>
      Example video 9: hello world {name}
    </div>
  )
}
export default Video9;