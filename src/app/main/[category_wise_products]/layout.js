import Navbar from "@/app/Navbar/page";

export default function Layout({ children }) {
  return (
    <div>
      {/* <div
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "white",
          zIndex: "999",
        }}
      >
        <Navbar />
      </div> */}
      {children}
    </div>
  );
}
