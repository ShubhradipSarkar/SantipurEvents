import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar"
import ScrollMenu from "@/components/ScrollMenu";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <div>
      
      </div>
      <div style={{margin: '5%'}}>
      <h1 style={{margin: '20px 0'}}>Lodge Booking</h1>
      <ScrollMenu business={"Book Lodge"}/>
      </div>
      <div style={{margin: '5%'}}>
      <h1 style={{margin: '20px 0'}}>Catering Booking</h1>
      <ScrollMenu business={"Book Catering"}/>
      </div >
      <div style={{boxSizing:'border-box', borderRadius:'25px'}}>
      
      </div>
      
    </div>
  );
}
