import { styled } from "styled-components";
import {BsCamera} from "react-icons/bs"
import avatar from "../assets/download.webp"
import { useState } from "react";

export const AddImage=() => {
    const [image, setImage] = useState<string>("")
  const [avatar, setAvatar] =useState<string>("avatar")

  const x =JSON.parse(localStorage.getItem("page")!)
    console.log("state", x);
  
    const onHandleImage = (e:any)=>{
        const file = e.target.files![0]
        const readyImage = URL.createObjectURL(file)

        setImage(file)
        setAvatar(readyImage)
    }
    return <Form>
        <Top>
            <StepPage>
                <Box bg="green" c="#aca6a6">1</Box>
                <Line bg="green" />
                <Box bg="green" c="#aca6a6">2</Box>
                <Line bg="green" />
                <Box bg="green" c="#aca6a6">3</Box>
                <Line bg="green" />
                <Box bg="green" c="#aca6a6">4</Box>
            </StepPage>
            <BoxTitle>
                <Div>ACCOUNT SETUP</Div>
                <Div>SOCIAL PROFILE</Div>
                <Div>PERSONAL DETAILS</Div>
                <Div>IMAGE</Div>
            </BoxTitle>
        </Top>
        <Card>
            <CardTitle>
                <nav>PROFILE PICTURE</nav>
                <nav>let's know you better</nav>
            </CardTitle>
            <InputWrap src={avatar}/>
            <ButtonHold >
                <Button bg="#640b12" onClick={()=>{localStorage.setItem("page", JSON.stringify(3));
                    window.location.reload()}}>PREVIOUS</Button>
                <Input type='file' id='ID' onChange={onHandleImage}/>
                <Label htmlFor="ID">
                <BsCamera/>
                </Label>
            </ButtonHold>
        </Card>
    </Form>;
}

const Label =styled.label`
height: 50px;
width: 120px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background-color: #045704;
margin: 0 20px;
font-size: 25px;
color: #d4d0d0;
`
const Button = styled.div<{bg:string}>`
height: 50px;
width: 120px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background-color: ${({bg})=>bg};
color: #aca6a6;
margin: 0 20px;
`
const ButtonHold = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 20px 15px;
/* background-color: red; */
`
const Input = styled.input`
display: none;
`

const InputWrap = styled.img`
height: 300px;
width: 90%;
display: flex;
flex-direction: column;
`

const CardTitle = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 10px;
nav{
    margin: 3px 0;
}
`
const Card = styled.div`
width: 500px;
min-height: 200px;
display: flex;
justify-content: center;
align-items: center;
background-color: #ffff;
flex-direction: column;
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ;
`
const BoxTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
`
const Line = styled.div<{bg: string}>`
width: 110px;
height: 4px;
border: 1px solid silver;
background-color: ${({bg})=>bg};
`

const Box = styled.div<{bg: string, c: string}>`
display: flex;
justify-content: center;
align-items: center;
height: 30px;
width: 30px;
border-radius: 4px;
border: 1px solid black;
background-color: ${({bg})=>bg};
color: ${({c})=>c}
`;


const Div = styled.div`
display: flex;
margin-right: 45px;
font-size: 12px;
font-family: poppins;

`
const StepPage = styled.div`
display: flex;
width: 550px;
justify-content: center;
align-items: center;
/* background-color: green; */

`
const Top = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
/* background-color: green; */
margin-bottom:30px;

`

const Form = styled.div`
width: 95%;
height: 95%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px 10px;
background-color: #eedee7;
border: 2px solid silver;
margin: 50px 0;
`

/* const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
` */