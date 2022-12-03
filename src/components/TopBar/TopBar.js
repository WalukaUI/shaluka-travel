import "./TopBar.css";
function TopBar() {
  return (
    <>
      <div className="topBar">
        <div className="topBarChild">
            <span class="material-symbols-outlined">phone_in_talk </span>
            <span style={{color: "#2f083b"}}>"  "</span>
            <p>   +94 776 500 723</p>
        </div>
        <div className="topBarChild">
            <span class="material-symbols-outlined">location_on</span>
            <span style={{color: "#2f083b"}}>"  "</span>
            <p>No 5 ,Thalammahara, Minuwangoda, Sri Lanka.</p>
        </div>
        <div className="topBarChild">
            <span class="material-symbols-outlined">mail</span>
            <span style={{color: "#2f083b"}}>"  "</span>
            <p>Email </p>
        </div>
      </div>
    </>
  );
}
export default TopBar;
