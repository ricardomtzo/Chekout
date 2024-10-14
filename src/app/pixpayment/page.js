import Image from "next/image";
import Navbar from "../../components/Navbar";
import { Box, Button, Container, Divider, Grid, Grid2, List, ListItem, ListItemText, Radio, TextField, Typography } from "@mui/material";
import { ArrowForwardOutlined, ArrowRight, ArrowRightSharp, BorderLeft, CheckOutlined, CheckRounded, ErrorOutline, WarningAmber } from "@mui/icons-material";
import plano from "../../assets/img/plano.png";

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

      <Grid2 container spacing={2} height={"100vh"} backgroundColor="white">

        <Grid2 container className="w-[48%] mt-10 justify-center">
          <Grid2 className="w-[70%]">
            <Typography variant="h6" color="black">Inserir detalhes de pagamento</Typography>
            <Box className="h-[2px] bg-gray-300 my-2 mb-8" />
            <List sx={style}>
              <ListItem>
                <Radio
                  checked
                  size="small"
                  value="a"
                  name="radio-buttons"
                />
                <Box className="ml-2 mr-4 w-[35px] h-[35px] border border-gray-300 rounded-full"></Box>
                <ListItemText
                  primary="Pix"
                  secondary="Aprovação na hora"
                  primaryTypographyProps={{ color: "black" }} />
                <Typography variant="subtitle2" color="primary" className="">Editar</Typography>
              </ListItem>
            </List>

            <Box className="my-8">
              <Typography variant="h6" color="black" className="mt-10 mb-3">Insira o e-mail para receber o código</Typography>
              <TextField
                fullWidth
                variant="outlined" />
            </Box>

            <Grid2 container className="my-8 border border-[#FFC722] rounded-md p-2" bgcolor={"#FFFAAD"}>
              <Grid2 className="w-[10%] mt-2 text-center">
                <WarningAmber color="warning" />
              </Grid2>
              <Grid2 className="w-[90%]">
                <Typography variant="p" color="red" className="font-bold ">Ao final da compra, você recebera o código para efetuar o pagamento.</Typography>
              </Grid2>
            </Grid2>

            <Button
              fullWidth
              size="large"
              variant="contained"
              className="mt-5 float-right mb-5"
              style={{ backgroundColor: "#32C770" }}
            >RECEBER PIX R$ 649,00 <ArrowForwardOutlined /></Button>

            <Typography variant="p" color="grey.400" className="mt-5">Os seus dados pessoais serão utilizados para processar a sua compra, apoiar a sua experiência neste site e para outros fins descritos na nossa política de privacidade.</Typography>
          </Grid2>

        </Grid2>

        <Grid2 container className="w-[50.9%] pt-10 justify-center" style={container2}>
          <Grid2 className="w-[70%]">
            <Typography variant="h6" color="black">Resumo do pedido</Typography>
            <Box className="h-[2px] bg-gray-300 my-2" />

            <Grid2 container spacing={2} className="my-8 ">
              <Grid2 item className="w-[15%]">
                <img src={plano.src} width={60} height={60} alt="plano" />
              </Grid2>
              <Grid2 item className="w-[60%]">
                <Typography variant="p" className="font-bold" color="black">Plano basic</Typography>
                <Typography variant="body1" color="grey">50.000 usuários mês</Typography>
              </Grid2>
              <Grid2 item className="float-right text-right ">
                <Typography variant="h6" color="black">R$ 649,00</Typography>
              </Grid2>
            </Grid2>
            <Box className="h-[2px] bg-gray-300 my-2 mb-6" />

            <Typography variant="body1" className="" color="black"><ErrorOutline className="mb-1" /> Detalhes</Typography>

            <Grid2 container spacing={2} className="my-8 justify-between">
              <Grid2>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
              </Grid2>
              <Grid2>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
                <Typography variant="h6" className="font-weight-[500]" color="grey"> <CheckRounded fontSize="large" sx={{ color: "grey" }} /> 50 usuários mês</Typography>
              </Grid2>
            </Grid2>
            <Box className="h-[2px] bg-gray-300 my-2 mb-6" />

            <List>
              <ListItem>
                <ListItemText
                  primary="Total"
                  secondary="Inclusos taxas e impostos"
                  primaryTypographyProps={{ color: "black", fontWeight: "500" }} />
                <Typography variant="h4" className="font-weight-[500]" color="black">R$ 649,00</Typography>

              </ListItem>
            </List>
          </Grid2>

        </Grid2>
      </Grid2>

    </div>
  );
}
