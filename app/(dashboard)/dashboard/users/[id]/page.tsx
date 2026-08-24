
const Userdetails = async({params}:{params:promise<{id: string}>}) => {
  const{ id } = await params;
  return(
    <div>
      <h1>This is User {id}</h1>
    </div>
  )
};
export default Userdetails;