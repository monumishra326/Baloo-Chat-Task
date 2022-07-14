import "./navbar.css";

export const Navbar = () => {
  const handler=()=>{
    alert('NotFound');
  }
  return (
    <div id="Navbar" onClick={handler}>
        <div><img src="https://randomuser.me/api/portraits/women/32.jpg" alt="" /></div>
        <div>Diana</div>
    </div>
  );
};
