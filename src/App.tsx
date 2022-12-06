export const App = () => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value="" onChange={(e) => e.preventDefault()} />
        <input type="submit" value="Add" onSubmit={(e) => e.preventDefault()} />
      </form>
    </div>
  );
};
