import Image from "next/image";
import Navbar from "../../components/Navbar";
import { Box, Button, Container, Divider, Grid2, List, ListItem, ListItemText, Radio, Typography } from "@mui/material";
import { ArrowForwardOutlined, ArrowRight, ArrowRightSharp, BorderLeft, CheckOutlined, CheckRounded, ErrorOutline } from "@mui/icons-material";
import plano from "../../assets/img/plano.png";

const style = {
  p: 0,
  width: '100%',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

const container2 = {
  borderLeft: '1px solid',
  backgroundColor: '#f4f5f9'
};

export default function Home() {
  return (
    <div>
      <Navbar />

      <Grid2 container spacing={2} height={"100vh"} backgroundColor="white">

        <Grid2 container className="w-[48%] mt-10 justify-center">
          <Grid2 className="w-[70%]">
            <Typography variant="h6" color="black">Selecione a forma de pagamento</Typography>
            <Box className="h-[2px] bg-gray-300 my-2 mb-8" />
            <List sx={style}>
              <ListItem>
                <Radio
                  size="small"
                  value="a"
                  name="radio-buttons"
                />
                <Box className="ml-2 mr-4 w-[35px] h-[35px] border border-gray-300 rounded-full"></Box>
                <ListItemText
                  primary="Cartão de crédito"
                  secondary="Parcelas disponíveis"
                  primaryTypographyProps={{ color: "black" }} />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <Radio
                  size="small"
                  value="a"
                  name="radio-buttons"
                />
                <Box className="ml-2 mr-4 w-[35px] h-[35px] border border-gray-300 rounded-full"></Box>
                <ListItemText
                  primary="Cartão de débito"
                  secondary="Cartão de débito virtual Caixa"
                  primaryTypographyProps={{ color: "black" }} />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <Radio
                  size="small"
                  value="a"
                  name="radio-buttons"
                />
                <Box className="ml-2 mr-4 w-[35px] h-[35px] border border-gray-300 rounded-full"></Box>
                <ListItemText
                  primary="PIX"
                  secondary="Aprovação na hora"
                  primaryTypographyProps={{ color: "black" }} />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <Radio
                  size="small"
                  value="a"
                  name="radio-buttons"
                />
                <Box className="ml-2 mr-4 w-[35px] h-[35px] border border-gray-300 rounded-full"></Box>
                <ListItemText
                  primary="Pagamento via boleto ou lotérica"
                  secondary="Vários pontos de pagamento"
                  primaryTypographyProps={{ color: "black" }} />
              </ListItem>
            </List>

            <Button
              size="large"
              variant="contained"
              className="mt-5 float-right rounded-full"
              style={{ backgroundColor: "#2196F3" }}
            >Continuar <ArrowForwardOutlined /></Button>
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
