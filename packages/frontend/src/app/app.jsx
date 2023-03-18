import Project from './nx-welcome';

export function App() {
  fetch('http://localhost:8080/api/addresses').then(console.log).catch(console.error);
  return (
    <>
      <Project/>
     </>
  );
}
export default App;
