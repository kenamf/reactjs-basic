function Article() {
  const name = "Fatur";
  const titles = ["Tutorial ReactJs", "Tutorial NextJs", "Tutorial NodeJs"];

  return (
    <>
      <div>{name}</div>
      <div>
        {titles.map((title) => {
          return <div>{title}</div>;
        })}
      </div>
    </>
  );
}

export default Article;
