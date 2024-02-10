import React from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase";
import Typography from "@mui/material/Typography";
import "./form.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CSEForm5 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/5/ANT");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = parseInt(event.target.cc1.value);
    var cc2 = parseInt(event.target.cc2.value);
    var cc3 = parseInt(event.target.cc3.value);
    var cc4 = parseInt(event.target.cc4.value);
    var cc5 = parseInt(event.target.cc5.value);
    var cc6 = parseInt(event.target.cc6.value);
    var cc7 = parseInt(event.target.cc7.value);
    var cc8 = parseInt(event.target.cc8.value);
    var cc9 = parseInt(event.target.cc9.value);
    var cc10 = parseInt(event.target.cc10.value);
    var cc11 = parseInt(event.target.cc11.value);
    var cc12 = parseInt(event.target.cc12.value);
    var cc13 = parseInt(event.target.cc13.value);
    var cc14 = parseInt(event.target.cc14.value);
    var cc15 = parseInt(event.target.cc15.value);
    var cc16 = parseInt(event.target.cc16.value);
    var cc17 = parseInt(event.target.cc17.value);
    var cc18 = parseInt(event.target.cc18.value);
    var cc19 = parseInt(event.target.cc19.value);
    var cc20 = parseInt(event.target.cc20.value);
    var cc21 = parseInt(event.target.cc21.value);
    var cc22 = parseInt(event.target.cc22.value);
    var cc23 = parseInt(event.target.cc23.value);
    var subject ="Algebra and Number Theory"
    var staff ="Mr.Raman"
    var credits = cc1+cc2+cc3+cc4+cc5+cc6+cc7+cc8+cc9+cc10+cc11+cc12+cc13+cc14+cc15+cc16+cc17+cc18+cc19+cc20+cc21+cc22+cc23;
    var avg  = credits/23;


    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      Subject: subject,
      SubjectHandler: staff,
      cc1: cc1,
      cc2: cc2,
      cc3: cc3,
      cc4: cc4,
      cc5: cc5,
      cc6: cc6,
      cc7: cc7,
      cc8: cc8,
      cc9: cc9,
      cc10: cc10,
      cc11: cc11,
      cc12: cc12,
      cc13: cc13,
      cc14: cc14,
      cc15: cc15,
      cc16: cc16,
      cc17: cc17,
      cc18: cc18,
      cc19: cc19,
      cc20: cc20,
      cc21: cc21,
      cc22: cc22,
      cc23: cc23,
      TotalCredits: credits,
      TotalAvg: avg   
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert(
      "Your Data has been recorded for ANT. Continue with the next Subject"
    );
    var formHide = document.getElementById("f1");
    formHide.style.display="none";
  };

  const handleSubmitCC = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/5/CN/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = parseInt(event.target.cc1.value);
    var cc2 = parseInt(event.target.cc2.value);
    var cc3 = parseInt(event.target.cc3.value);
    var cc4 = parseInt(event.target.cc4.value);
    var cc5 = parseInt(event.target.cc5.value);
    var cc6 = parseInt(event.target.cc6.value);
    var cc7 = parseInt(event.target.cc7.value);
    var cc8 = parseInt(event.target.cc8.value);
    var cc9 = parseInt(event.target.cc9.value);
    var cc10 = parseInt(event.target.cc10.value);
    var cc11 = parseInt(event.target.cc11.value);
    var cc12 = parseInt(event.target.cc12.value);
    var cc13 = parseInt(event.target.cc13.value);
    var cc14 = parseInt(event.target.cc14.value);
    var cc15 = parseInt(event.target.cc15.value);
    var cc16 = parseInt(event.target.cc16.value);
    var cc17 = parseInt(event.target.cc17.value);
    var cc18 = parseInt(event.target.cc18.value);
    var cc19 = parseInt(event.target.cc19.value);
    var cc20 = parseInt(event.target.cc20.value);
    var cc21 = parseInt(event.target.cc21.value);
    var cc22 = parseInt(event.target.cc22.value);
    var cc23 = parseInt(event.target.cc23.value);
    var subject ="Computer Networks"
    var staff ="Mr.S.Manickam"
    var credits = cc1+cc2+cc3+cc4+cc5+cc6+cc7+cc8+cc9+cc10+cc11+cc12+cc13+cc14+cc15+cc16+cc17+cc18+cc19+cc20+cc21+cc22+cc23;
    var avg  = credits/23;
    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      Subject: subject,
      SubjectHandler: staff,
      cc1: cc1,
      cc2: cc2,
      cc3: cc3,
      cc4: cc4,
      cc5: cc5,
      cc6: cc6,
      cc7: cc7,
      cc8: cc8,
      cc9: cc9,
      cc10: cc10,
      cc11: cc11,
      cc12: cc12,
      cc13: cc13,
      cc14: cc14,
      cc15: cc15,
      cc16: cc16,
      cc17: cc17,
      cc18: cc18,
      cc19: cc19,
      cc20: cc20,
      cc21: cc21,
      cc22: cc22,
      cc23: cc23,
      TotalCredits: credits,    
      TotalAvg:avg
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for CN. Continue with the next Subject");
    var formHide = document.getElementById("f2");
    formHide.style.display="none";
  };
  const handleSubmitDM = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/5/MPMC/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = parseInt(event.target.cc1.value);
    var cc2 = parseInt(event.target.cc2.value);
    var cc3 = parseInt(event.target.cc3.value);
    var cc4 = parseInt(event.target.cc4.value);
    var cc5 = parseInt(event.target.cc5.value);
    var cc6 = parseInt(event.target.cc6.value);
    var cc7 = parseInt(event.target.cc7.value);
    var cc8 = parseInt(event.target.cc8.value);
    var cc9 = parseInt(event.target.cc9.value);
    var cc10 = parseInt(event.target.cc10.value);
    var cc11 = parseInt(event.target.cc11.value);
    var cc12 = parseInt(event.target.cc12.value);
    var cc13 = parseInt(event.target.cc13.value);
    var cc14 = parseInt(event.target.cc14.value);
    var cc15 = parseInt(event.target.cc15.value);
    var cc16 = parseInt(event.target.cc16.value);
    var cc17 = parseInt(event.target.cc17.value);
    var cc18 = parseInt(event.target.cc18.value);
    var cc19 = parseInt(event.target.cc19.value);
    var cc20 = parseInt(event.target.cc20.value);
    var cc21 = parseInt(event.target.cc21.value);
    var cc22 = parseInt(event.target.cc22.value);
    var cc23 = parseInt(event.target.cc23.value);
    var subject ="Microprocessor and Microcontroller"
    var staff ="Mrs.N.Nancy Chitra Thilaga"
    var credits = cc1+cc2+cc3+cc4+cc5+cc6+cc7+cc8+cc9+cc10+cc11+cc12+cc13+cc14+cc15+cc16+cc17+cc18+cc19+cc20+cc21+cc22+cc23;
    var avg  = credits/23;
    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      Subject: subject,
      SubjectHandler: staff,
      cc1: cc1,
      cc2: cc2,
      cc3: cc3,
      cc4: cc4,
      cc5: cc5,
      cc6: cc6,
      cc7: cc7,
      cc8: cc8,
      cc9: cc9,
      cc10: cc10,
      cc11: cc11,
      cc12: cc12,
      cc13: cc13,
      cc14: cc14,
      cc15: cc15,
      cc16: cc16,
      cc17: cc17,
      cc18: cc18,
      cc19: cc19,
      cc20: cc20,
      cc21: cc21,
      cc22: cc22,
      cc23: cc23,
      TotalCredits: credits,
      TotalAvg:avg    
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for MPMC. Continue with the next Subject");
    var formHide = document.getElementById("f3");
    formHide.style.display="none";
  };
  const handleSubmitPOM = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/5/TOC/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = parseInt(event.target.cc1.value);
    var cc2 = parseInt(event.target.cc2.value);
    var cc3 = parseInt(event.target.cc3.value);
    var cc4 = parseInt(event.target.cc4.value);
    var cc5 = parseInt(event.target.cc5.value);
    var cc6 = parseInt(event.target.cc6.value);
    var cc7 = parseInt(event.target.cc7.value);
    var cc8 = parseInt(event.target.cc8.value);
    var cc9 = parseInt(event.target.cc9.value);
    var cc10 = parseInt(event.target.cc10.value);
    var cc11 = parseInt(event.target.cc11.value);
    var cc12 = parseInt(event.target.cc12.value);
    var cc13 = parseInt(event.target.cc13.value);
    var cc14 = parseInt(event.target.cc14.value);
    var cc15 = parseInt(event.target.cc15.value);
    var cc16 = parseInt(event.target.cc16.value);
    var cc17 = parseInt(event.target.cc17.value);
    var cc18 = parseInt(event.target.cc18.value);
    var cc19 = parseInt(event.target.cc19.value);
    var cc20 = parseInt(event.target.cc20.value);
    var cc21 = parseInt(event.target.cc21.value);
    var cc22 = parseInt(event.target.cc22.value);
    var cc23 = parseInt(event.target.cc23.value);
    var subject ="Theory of Computation"
    var staff ="Mrs.S.Porkodi"
    var credits = cc1+cc2+cc3+cc4+cc5+cc6+cc7+cc8+cc9+cc10+cc11+cc12+cc13+cc14+cc15+cc16+cc17+cc18+cc19+cc20+cc21+cc22+cc23;
    var avg  = credits/23;
    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      Subject: subject,
      SubjectHandler: staff,
      cc1: cc1,
      cc2: cc2,
      cc3: cc3,
      cc4: cc4,
      cc5: cc5,
      cc6: cc6,
      cc7: cc7,
      cc8: cc8,
      cc9: cc9,
      cc10: cc10,
      cc11: cc11,
      cc12: cc12,
      cc13: cc13,
      cc14: cc14,
      cc15: cc15,
      cc16: cc16,
      cc17: cc17,
      cc18: cc18,
      cc19: cc19,
      cc20: cc20,
      cc21: cc21,
      cc22: cc22,
      cc23: cc23,
      TotalCredits: credits,
      TotalAvg:avg     
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert(
      "Your Data has been recorded for TOC. Continue with the next Subject"
    );
    var formHide = document.getElementById("f4");
    formHide.style.display="none";
  };
  const handleSubmitET = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/5/OOAD/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = parseInt(event.target.cc1.value);
    var cc2 = parseInt(event.target.cc2.value);
    var cc3 = parseInt(event.target.cc3.value);
    var cc4 = parseInt(event.target.cc4.value);
    var cc5 = parseInt(event.target.cc5.value);
    var cc6 = parseInt(event.target.cc6.value);
    var cc7 = parseInt(event.target.cc7.value);
    var cc8 = parseInt(event.target.cc8.value);
    var cc9 = parseInt(event.target.cc9.value);
    var cc10 = parseInt(event.target.cc10.value);
    var cc11 = parseInt(event.target.cc11.value);
    var cc12 = parseInt(event.target.cc12.value);
    var cc13 = parseInt(event.target.cc13.value);
    var cc14 = parseInt(event.target.cc14.value);
    var cc15 = parseInt(event.target.cc15.value);
    var cc16 = parseInt(event.target.cc16.value);
    var cc17 = parseInt(event.target.cc17.value);
    var cc18 = parseInt(event.target.cc18.value);
    var cc19 = parseInt(event.target.cc19.value);
    var cc20 = parseInt(event.target.cc20.value);
    var cc21 = parseInt(event.target.cc21.value);
    var cc22 = parseInt(event.target.cc22.value);
    var cc23 = parseInt(event.target.cc23.value);
    var subject ="Object Oriented Analysis and Design"
    var staff ="Mrs.P.Joy Suganthy Bai"
    var credits = cc1+cc2+cc3+cc4+cc5+cc6+cc7+cc8+cc9+cc10+cc11+cc12+cc13+cc14+cc15+cc16+cc17+cc18+cc19+cc20+cc21+cc22+cc23;
    var avg  = credits/23;
    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      Subject: subject,
      SubjectHandler: staff,
      cc1: cc1,
      cc2: cc2,
      cc3: cc3,
      cc4: cc4,
      cc5: cc5,
      cc6: cc6,
      cc7: cc7,
      cc8: cc8,
      cc9: cc9,
      cc10: cc10,
      cc11: cc11,
      cc12: cc12,
      cc13: cc13,
      cc14: cc14,
      cc15: cc15,
      cc16: cc16,
      cc17: cc17,
      cc18: cc18,
      cc19: cc19,
      cc20: cc20,
      cc21: cc21,
      cc22: cc22,
      cc23: cc23,
      TotalCredits: credits,
      TotalAvg:avg     
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for OOAD. Continue with the next Subject");
    var formHide = document.getElementById("f5");
    formHide.style.display="none";
  };
  const handleSubmitSE = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/5/THT/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = parseInt(event.target.cc1.value);
    var cc2 = parseInt(event.target.cc2.value);
    var cc3 = parseInt(event.target.cc3.value);
    var cc4 = parseInt(event.target.cc4.value);
    var cc5 = parseInt(event.target.cc5.value);
    var cc6 = parseInt(event.target.cc6.value);
    var cc7 = parseInt(event.target.cc7.value);
    var cc8 = parseInt(event.target.cc8.value);
    var cc9 = parseInt(event.target.cc9.value);
    var cc10 = parseInt(event.target.cc10.value);
    var cc11 = parseInt(event.target.cc11.value);
    var cc12 = parseInt(event.target.cc12.value);
    var cc13 = parseInt(event.target.cc13.value);
    var cc14 = parseInt(event.target.cc14.value);
    var cc15 = parseInt(event.target.cc15.value);
    var cc16 = parseInt(event.target.cc16.value);
    var cc17 = parseInt(event.target.cc17.value);
    var cc18 = parseInt(event.target.cc18.value);
    var cc19 = parseInt(event.target.cc19.value);
    var cc20 = parseInt(event.target.cc20.value);
    var cc21 = parseInt(event.target.cc21.value);
    var cc22 = parseInt(event.target.cc22.value);
    var cc23 = parseInt(event.target.cc23.value);
    var subject ="Tele Health Technology"
    var staff ="Mr.M.Krishna Kumar"
    var credits = cc1+cc2+cc3+cc4+cc5+cc6+cc7+cc8+cc9+cc10+cc11+cc12+cc13+cc14+cc15+cc16+cc17+cc18+cc19+cc20+cc21+cc22+cc23;
    var avg  = credits/23;
    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      Subject: subject,
      SubjectHandler: staff,
      cc1: cc1,
      cc2: cc2,
      cc3: cc3,
      cc4: cc4,
      cc5: cc5,
      cc6: cc6,
      cc7: cc7,
      cc8: cc8,
      cc9: cc9,
      cc10: cc10,
      cc11: cc11,
      cc12: cc12,
      cc13: cc13,
      cc14: cc14,
      cc15: cc15,
      cc16: cc16,
      cc17: cc17,
      cc18: cc18,
      cc19: cc19,
      cc20: cc20,
      cc21: cc21,
      cc22: cc22,
      cc23: cc23,
      TotalCredits: credits,
      TotalAvg:avg    
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert("Your Data has been recorded for THT. Continue with the next Subject");
    var formHide = document.getElementById("f6");
    formHide.style.display="none";
  };
  const handleSubmitCC_LAB = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/5/MPMC_LAB/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = parseInt(event.target.cc1.value);
    var cc2 = parseInt(event.target.cc2.value);
    var cc3 = parseInt(event.target.cc3.value);
    var cc4 = parseInt(event.target.cc4.value);
    var cc5 = parseInt(event.target.cc5.value);
    var cc6 = parseInt(event.target.cc6.value);
    var cc7 = parseInt(event.target.cc7.value);
    var cc8 = parseInt(event.target.cc8.value);
    var cc9 = parseInt(event.target.cc9.value);
    var cc10 = parseInt(event.target.cc10.value);
    var cc11 = parseInt(event.target.cc11.value);
    var cc12 = parseInt(event.target.cc12.value);
    var cc13 = parseInt(event.target.cc13.value);
    var cc14 = parseInt(event.target.cc14.value);
    var cc15 = parseInt(event.target.cc15.value);
    var cc16 = parseInt(event.target.cc16.value);
    var cc17 = parseInt(event.target.cc17.value);
    var cc18 = parseInt(event.target.cc18.value);
    var cc19 = parseInt(event.target.cc19.value);
    var cc20 = parseInt(event.target.cc20.value);
    var cc21 = parseInt(event.target.cc21.value);
    var cc22 = parseInt(event.target.cc22.value);
    var cc23 = parseInt(event.target.cc23.value);
    var subject ="Microprocessor and Microcontroller Laboratory"
    var staff ="Mrs.Nancy Chitra Thilaga"
    var credits = cc1+cc2+cc3+cc4+cc5+cc6+cc7+cc8+cc9+cc10+cc11+cc12+cc13+cc14+cc15+cc16+cc17+cc18+cc19+cc20+cc21+cc22+cc23;
    var avg  = credits/23;
    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      Subject: subject,
      SubjectHandler: staff,
      cc1: cc1,
      cc2: cc2,
      cc3: cc3,
      cc4: cc4,
      cc5: cc5,
      cc6: cc6,
      cc7: cc7,
      cc8: cc8,
      cc9: cc9,
      cc10: cc10,
      cc11: cc11,
      cc12: cc12,
      cc13: cc13,
      cc14: cc14,
      cc15: cc15,
      cc16: cc16,
      cc17: cc17,
      cc18: cc18,
      cc19: cc19,
      cc20: cc20,
      cc21: cc21,
      cc22: cc22,
      cc23: cc23,
      TotalCredits: credits,
      TotalAvg:avg    
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert(
      "Your Data has been recorded for MPMC Lab. Continue with the next Subject"
    );
    var formHide = document.getElementById("f7");
    formHide.style.display="none";
  };
  const handleSubmitNS_LAB = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/5/OOAD_LAB/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = parseInt(event.target.cc1.value);
    var cc2 = parseInt(event.target.cc2.value);
    var cc3 = parseInt(event.target.cc3.value);
    var cc4 = parseInt(event.target.cc4.value);
    var cc5 = parseInt(event.target.cc5.value);
    var cc6 = parseInt(event.target.cc6.value);
    var cc7 = parseInt(event.target.cc7.value);
    var cc8 = parseInt(event.target.cc8.value);
    var cc9 = parseInt(event.target.cc9.value);
    var cc10 = parseInt(event.target.cc10.value);
    var cc11 = parseInt(event.target.cc11.value);
    var cc12 = parseInt(event.target.cc12.value);
    var cc13 = parseInt(event.target.cc13.value);
    var cc14 = parseInt(event.target.cc14.value);
    var cc15 = parseInt(event.target.cc15.value);
    var cc16 = parseInt(event.target.cc16.value);
    var cc17 = parseInt(event.target.cc17.value);
    var cc18 = parseInt(event.target.cc18.value);
    var cc19 = parseInt(event.target.cc19.value);
    var cc20 = parseInt(event.target.cc20.value);
    var cc21 = parseInt(event.target.cc21.value);
    var cc22 = parseInt(event.target.cc22.value);
    var cc23 = parseInt(event.target.cc23.value);
    var subject ="Object Oriented Analysis and Design Laboratory"
    var staff ="Mrs.S.Porkodi"
    var credits = cc1+cc2+cc3+cc4+cc5+cc6+cc7+cc8+cc9+cc10+cc11+cc12+cc13+cc14+cc15+cc16+cc17+cc18+cc19+cc20+cc21+cc22+cc23;
    var avg  = credits/23;
    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      Subject: subject,
      SubjectHandler: staff,
      cc1: cc1,
      cc2: cc2,
      cc3: cc3,
      cc4: cc4,
      cc5: cc5,
      cc6: cc6,
      cc7: cc7,
      cc8: cc8,
      cc9: cc9,
      cc10: cc10,
      cc11: cc11,
      cc12: cc12,
      cc13: cc13,
      cc14: cc14,
      cc15: cc15,
      cc16: cc16,
      cc17: cc17,
      cc18: cc18,
      cc19: cc19,
      cc20: cc20,
      cc21: cc21,
      cc22: cc22,
      cc23: cc23,
      TotalCredits: credits,
      TotalAvg:avg   
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert(
      "Your Data has been recorded for OOAD Lab. Thank You for Giving your feedback"
    );
   var formHide = document.getElementById("f8");
    formHide.style.display="none";
  };
  const handleSubmitN_LAB = (event) => {
    event.preventDefault();

    const ref = collection(firestore, "cse-feedbacks/5/N_LAB/");

    var name = event.target.name.value;
    var regno = event.target.regno.value;
    var dept = event.target.dept.value;
    var sem = event.target.sem.value;
    var cc1 = parseInt(event.target.cc1.value);
    var cc2 = parseInt(event.target.cc2.value);
    var cc3 = parseInt(event.target.cc3.value);
    var cc4 = parseInt(event.target.cc4.value);
    var cc5 = parseInt(event.target.cc5.value);
    var cc6 = parseInt(event.target.cc6.value);
    var cc7 = parseInt(event.target.cc7.value);
    var cc8 = parseInt(event.target.cc8.value);
    var cc9 = parseInt(event.target.cc9.value);
    var cc10 = parseInt(event.target.cc10.value);
    var cc11 = parseInt(event.target.cc11.value);
    var cc12 = parseInt(event.target.cc12.value);
    var cc13 = parseInt(event.target.cc13.value);
    var cc14 = parseInt(event.target.cc14.value);
    var cc15 = parseInt(event.target.cc15.value);
    var cc16 = parseInt(event.target.cc16.value);
    var cc17 = parseInt(event.target.cc17.value);
    var cc18 = parseInt(event.target.cc18.value);
    var cc19 = parseInt(event.target.cc19.value);
    var cc20 = parseInt(event.target.cc20.value);
    var cc21 = parseInt(event.target.cc21.value);
    var cc22 = parseInt(event.target.cc22.value);
    var cc23 = parseInt(event.target.cc23.value);
    var subject ="Networks Laboratory"
    var staff ="Mr.S.Manickam"
    var credits = cc1+cc2+cc3+cc4+cc5+cc6+cc7+cc8+cc9+cc10+cc11+cc12+cc13+cc14+cc15+cc16+cc17+cc18+cc19+cc20+cc21+cc22+cc23;
    var avg  = credits/23;
    let data = {
      Name: name,
      RegisterNumber: regno,
      Department: dept,
      Semester: sem,
      Subject: subject,
      SubjectHandler: staff,
      cc1: cc1,
      cc2: cc2,
      cc3: cc3,
      cc4: cc4,
      cc5: cc5,
      cc6: cc6,
      cc7: cc7,
      cc8: cc8,
      cc9: cc9,
      cc10: cc10,
      cc11: cc11,
      cc12: cc12,
      cc13: cc13,
      cc14: cc14,
      cc15: cc15,
      cc16: cc16,
      cc17: cc17,
      cc18: cc18,
      cc19: cc19,
      cc20: cc20,
      cc21: cc21,
      cc22: cc22,
      cc23: cc23,
      TotalCredits: credits,
      TotalAvg:avg    
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    alert(
      "Your Data has been recorded for OOAD Lab. Thank You for Giving your feedback"
    );
    var formHide = document.getElementById("f9");
    formHide.style.display="none";
    let info = document.querySelector("h1");
    info.innerHTML ="Thank You for Submitting your feedback. Your response has been recorded"
  };

  return (
    <div className="form-container">
      <div className="heading">FeedBack Form For 5th Semester</div>
       <h1>-</h1>
      <form className="form" onSubmit={handleSubmit} id="f1">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Algebra and Number Theory</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="5" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1" defaultValue='5'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3" defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
            </ol>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for Cloud Computing */}
      <form className="form" onSubmit={handleSubmitCC} id="f2">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Computer Networks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="5" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1" defaultValue='5'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3" defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for Disaster Management */}
      <form className="form" onSubmit={handleSubmitDM} id="f3">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Microprocessor and Microcontroller</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="5" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1" defaultValue='5'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3" defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* For for POM */}
      <form className="form" onSubmit={handleSubmitPOM} id="f4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Theory of Computation</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="5" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1" defaultValue='5'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3" defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for ET */}
      <form className="form" onSubmit={handleSubmitET} id="f5">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Object Oriented Analysis and Design</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="5" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1" defaultValue='5'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3" defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for SE */}
      <form className="form" onSubmit={handleSubmitSE} id="f6">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Tele Health Technology</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="5" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1" defaultValue='5'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3" defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for CC Lab */}
      <form className="form" onSubmit={handleSubmitCC_LAB} id="f7">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Microprocessor & Microcontroller Laboratory</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="5" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1" defaultValue='5'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3" defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for NS Lab */}
      <form className="form" onSubmit={handleSubmitNS_LAB} id="f8">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Object Oriented Analysis & Design Laboratory</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="5" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1" defaultValue='5'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3" defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </AccordionDetails>
        </Accordion>
      </form>
      {/* Form for N Lab */}
      <form className="form" onSubmit={handleSubmitN_LAB} id="f9">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Networks Laboratory</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="item">
              <label htmlFor="name">Enter your name </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className="item">
              <label htmlFor="name">Enter your Register Number </label>
              <input type="number" name="regno" required />
            </div>

            <div className="item">
              <label htmlFor="name">Department </label>
              <input
                type="text"
                name="dept"
                disabled
                value="Computer Science & Engineering"
              />
            </div>

            <div className="item">
              <label htmlFor="name">Semester</label>
              <input type="text" disabled name="sem" value="5" />
            </div>
            <ol className="feedback-form">
              <li className="feedback-list">
                <div className="item">
                  <h3>Punctuality in the Class</h3>
                  <select name="cc1" id="cns1" defaultValue='5'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Regularity in taking Classes</h3>
                  <select name="cc2" id="cns2" required defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Completes syllabus of the course in time</h3>
                  <select name="cc3" id="cns3" defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Scheduled organization of assignments, class test, quizzes
                    and seminars
                  </h3>
                  <select name="cc4" id="cns4"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Focus on Syllabi</h3>
                  <select name="cc5" id="cns5"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Self-confidence</h3>
                  <select name="cc6" id="cns6"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Communication skills</h3>
                  <select name="cc7" id="cns7"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Conducting the classroom discussions</h3>
                  <select name="cc8" id="cns8"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Teaching the subject matter</h3>
                  <select name="cc9" id="cns9"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Delivery of structured lecture</h3>
                  <select name="cc10" id="cns10"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Skill of linking subject to life experience & creating
                    interest in the subject
                  </h3>
                  <select name="cc11" id="cns11"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Refers to latest developments in the field</h3>
                  <select name="cc12" id="cns12"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of teaching aids (OHP/Blackboard /PPT's)</h3>
                  <select name="cc13" id="cns13"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Blackboard/Whiteboard work in terms of legibility,
                    visibility and structure
                  </h3>
                  <select name="cc14" id="cns14"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Uses of innovative teaching methods</h3>
                  <select name="cc15" id="cns15"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shares the answers of class tests or sessional test
                    questions after the conduct of the class tests/sessional
                    tests.
                  </h3>
                  <select name="cc16" id="cns16"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Shows the evaluated answer books of class tests to the
                    students
                  </h3>
                  <select name="cc17" id="cns17"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Makes sure that he/she is being understood</h3>
                  <select name="cc18" id="cns18"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helping approach towards varied academic interests of
                    students
                  </h3>
                  <select name="cc19" id="cns19"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps student in providing study material which is not
                    readily available in the text books say through e-resources,
                    e-journals, reference books, open course wares etc.
                  </h3>
                  <select name="cc20" id="cns20"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students irrespective of ethnicity and
                    culture/background
                  </h3>
                  <select name="cc21" id="cns21"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>Helps students irrespective of gender</h3>
                  <select name="cc22" id="cns22"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>

              <li className="feedback-list">
                <div className="item">
                  <h3>
                    Helps students facing physical, emotional and learning
                    challenges
                  </h3>
                  <select name="cc23" id="cns23"defaultValue='5'>
                  <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </li>
            </ol>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </AccordionDetails>
        </Accordion>
      </form>
    </div>
  );
};

export default CSEForm5;
