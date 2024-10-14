import Image from "next/image";
import Navbar from "../../components/Navbar";
import { Box, Button, Container, Divider, Grid2, List, ListItem, ListItemText, Radio, TextField, Typography } from "@mui/material";
import { AddShoppingCartOutlined, ArrowForwardOutlined, ArrowRight, ArrowRightSharp, AssignmentOutlined, AssignmentTurnedInOutlined, AssignmentTurnedInSharp, BorderLeft, CheckCircle, CheckCircleOutline, CheckOutlined, CheckRounded, DisplaySettings, ErrorOutline, TaskAlt } from "@mui/icons-material";
import sucess from "../../assets/img/sucess.jpg";
import ImageList from "@/components/ImageList";
import ImageListComponent from "@/components/ImageList";

const style = {
  p: 0,
  width: '100%',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'grey.100',
};

const container2 = {
  borderLeft: '1px solid',
  backgroundColor: '#f4f5f9'
};

export default function Cardpayment() {
  return (
    <div>
      <Navbar />

      <Grid2 container spacing={2} height={"100%"} backgroundColor="white" justifyContent={"center"}>

        <Grid2 container className="justify-center" display={"none"}>
          <Grid2 className="w-[70%]" >
            <Typography variant="h5" color="black">Sua solicitação foi completada com sucesso.</Typography>
            <Typography variant="h5" color="black">O número do seu pedido é #000000. </Typography>
            <Typography variant="h5" color="black">Em seguida você receberá um e-mail com os detalhes de seu pedido. </Typography>

            <Grid2 container className="mt-10">
              <Grid2>
                <Typography variant="p" color="black">Plano</Typography>
                <Typography variant="h6" color="black">#NomePlano</Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>

        <img src={sucess.src} alt="sucesso" style={{ width: '75%', objectFit: 'contain', }} />

        <Grid2 container className="w-[75%] pb-10 mt-5">
          <Typography variant="h5" className="font-bold" color="black">Veja quais são os próximos passos</Typography>

          <Grid2 container className="w-[100%] m-0 my-5 justify-center">
            <Grid2 container className="w-[100%] justify-center align-items-center">
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CheckCircleOutline color="primary" style={{ fontSize: 60 }} />
                  <Typography variant="h6" color="primary" fontSize={14}>Pedido enviado</Typography>
              </Box>
              <Box className="h-[4px] w-[100px] bg-[#3497F9] mt-7 rounded-full" />

              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'lightgray' }}>
                  <AddShoppingCartOutlined color="gray" style={{ fontSize: 60 }} />
                  <Typography variant="h6" color="lightgray" fontSize={14}>Aprovação do pedido</Typography>
              </Box>
              <Box className="h-[4px] w-[100px] bg-gray-300 mt-7 rounded-full" />

              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'lightgray' }}>
                  <DisplaySettings color="gray" style={{ fontSize: 60 }} />
                  <Typography variant="h6" color="lightgray" fontSize={14}>Aprovação do pedido</Typography>
              </Box>
              <Box className="h-[4px] w-[100px] bg-gray-300 mt-7 rounded-full" />

              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'lightgray' }}>
                  <AssignmentTurnedInOutlined color="gray" style={{ fontSize: 60 }} />
                  <Typography variant="h6" color="lightgray" fontSize={14}>Aprovação do pedido</Typography>
              </Box>
            </Grid2>
          </Grid2>

          <Typography variant="h5" className="font-bold mt-5" color="black">Confira nossos guias e artigos</Typography>

          <ImageListComponent />
        </Grid2>
      </Grid2>


    </div>
  );
}
