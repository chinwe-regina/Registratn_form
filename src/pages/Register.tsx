
import styled from "styled-components";
import { CreatAcct } from "./CreateAccount"
import { SocialPro } from "./SocialP";
import { PersonDetail } from "./PersonalDetails";
import { AddImage } from "./AddImage";
import {useState} from "react"

<CreatAcct/>;
<SocialPro/>;
<PersonDetail/>;
<AddImage/>

const Register = () => {
  const x = JSON.parse(localStorage.getItem("page")!)
    console.log("state", x);

  return (
    <div>
        <Container>
          {x===1?(<CreatAcct/>): x===2? (<SocialPro/>): x===3? (<PersonDetail/>): x===4? (<AddImage/>): null }
        </Container>

        <CreatAcct/>
    </div>
  )

    
}

export default Register;


const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`