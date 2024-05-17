const fetchDetails = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium velit et omnis facilis iusto nobis debitis sint esse blanditiis mollitia fugiat nemo quam, itaque odit dignissimos ad fugit accusantium aut harum nihil quidem. Quam nam minima deserunt laborum omnis sit ipsa ipsam laboriosam! Ipsa totam praesentium non ipsam modi ea, tenetur necessitatibus, repellat earum esse rerum, quos eaque molestias! Ea in impedit obcaecati, quibusdam eaque esse dolorum reprehenderit rerum similique sint molestiae, libero nesciunt veniam sit. Quaerat quod, architecto vero facere doloremque asperiores accusantium, reprehenderit quisquam, iste quidem facilis et dolore saepe ex provident doloribus sit corrupti a. Voluptatibus, eveniet.";
};
export default async function Details() {
  const details = await fetchDetails();
  return (
    <div>
      <h1>{details}</h1>
    </div>
  );
}
