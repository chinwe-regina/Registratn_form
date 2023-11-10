import { styled } from "styled-components";

export const SocialPro=() => {

    const x= JSON.parse(localStorage.getItem("page")!)
    console.log("state", x);

    return <Form>
        <Top>
            <StepPage>
                <Box bg="green" c="#aca6a6">1</Box>
                <Line bg="green" />
                <Box bg="green" c="#aca6a6">2</Box>
                <Line bg="" />
                <Box bg="" c="black">3</Box>
                <Line bg="" />
                <Box bg="" c="black">4</Box>
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
                <nav>SOCIAL PROFILE</nav>
                <nav>Your presence on the social network </nav>
            </CardTitle>
            <InputWrap>
                <Input placeholder="Email" type="Email" />
                <Input placeholder="password" type="password" id="pwd" />
                <Input placeholder="Re-enter password" type="password" id="pwd" />
            </InputWrap>
            <ButtonHold>
               <Button bg="#640b12" onClick={()=>{localStorage.setItem("page", JSON.stringify(1))
             window.location.reload()}}>PREVIOUS</Button>
            <Button bg="#045704" onClick={()=>{localStorage.setItem("page", JSON.stringify(3))
             window.location.reload()}} >NEXT</Button>
            </ButtonHold>
        </Card>
    </Form>;
}

const Button = styled.div<{bg:string}>`
height: 50px;
width: 120px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background-color: ${({bg})=>bg};
margin: 0 20px;
color: #aca6a6;

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
width: 100%;
height: 50px;
border-radius: 4px;
align-items: center;
outline: none;
border: 1px solid silver;
margin: 10px 0;
&::placeholder{
    padding: 15px;
}
`
const InputWrap = styled.div`
min-height: 200px;
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