import { getData } from "../lib/firebaseModel";

function page() {
  console.log(getData());
  return <div>Hello Home</div>;
}

export default page;
