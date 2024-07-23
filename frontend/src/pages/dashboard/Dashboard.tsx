import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

import { ProdutosService } from '../../shared/services/api/produtos/ProdutosService';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {
  const [isLoadingProdutos, setIsLoadingProdutos] = useState(true);
  const [isLoadingPessoas, setIsLoadingPessoas] = useState(true);
  const [totalCountProdutos, setTotalCountProdutos] = useState(0);
  const [totalCountPessoas, setTotalCountPessoas] = useState(0);

  useEffect(() => {
    setIsLoadingProdutos(true);
    setIsLoadingPessoas(true);

    // ProdutosService.getAll(1)
    //   .then((result) => {
    //     setIsLoadingProdutos(false);

    //     if (result instanceof Error) {
    //       alert(result.message);
    //     } else {
    //       setTotalCountProdutos(result.totalCount);
    //     }
    //   });
    PessoasService.getAll(1)
      .then((result) => {
        setIsLoadingPessoas(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          setTotalCountPessoas(result.totalCount);
        }
      });
  }, []);


  return (
    <LayoutBaseDePagina
      titulo='Página inicial'
      barraDeFerramentas={<FerramentasDaListagem mostrarBotaoNovo={false} />}
    >
      <Box width='100%' display='flex'>
        <Grid container margin={2}>
          <Grid item container spacing={2}>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>

              <Card>
                <CardContent>
                  <Typography variant='h5' align='center'>
                    Total de pessoas
                  </Typography>

                  <Box padding={6} display='flex' justifyContent='center' alignItems='center'>
                    {!isLoadingPessoas && (
                      <Typography variant='h1'>
                        {totalCountPessoas}
                      </Typography>
                    )}
                    {isLoadingPessoas && (
                      <Typography variant='h6'>
                        Carregando...
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>

              <Card>
                <CardContent>
                  <Typography variant='h5' align='center'>
                    Total de produtos
                  </Typography>

                  <Box padding={6} display='flex' justifyContent='center' alignItems='center'>
                    {!isLoadingProdutos && (
                      <Typography variant='h1'>
                        {totalCountProdutos}
                      </Typography>
                    )}
                    {isLoadingProdutos && (
                      <Typography variant='h6'>
                        Carregando...
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>

            </Grid>

          </Grid>
        </Grid>
      </Box>
    </LayoutBaseDePagina>
  );
};
