import { useEffect, useState } from 'react';
import { Box, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';

import { ProdutosService } from '../../shared/services/api/produtos/ProdutosService';
import { VTextField, VForm, useVForm, IVFormErrors } from '../../shared/forms';
import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

interface IFormData {
  name: string;
  price: number;
  model: string;
  reference: string;
  brand: string;
  image_url: string;
  quantity: number;
}

const formValidationSchema: yup.SchemaOf<IFormData> = yup.object().shape({
  name: yup.string().required().min(3),
  price: yup.number().required().min(0),
  model: yup.string().required().min(3),
  reference: yup.string().required().min(3),
  brand: yup.string().required().min(3),
  image_url: yup.string().required().min(3),
  quantity: yup.number().required().min(0),
});

export const DetalheDeProdutos: React.FC = () => {
  const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setNome] = useState('');

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true);

      ProdutosService.getById(Number(id))
        .then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
            navigate('/produtos');
          } else {
            setNome(result.name);
            formRef.current?.setData(result);
          }
        });
    } else {
      formRef.current?.setData({
        name: '',
        price: 0,
        model: '',
        reference: '',
        brand: '',
        image_url: '',
        quantity: 0,
      });
    }
  }, [id]);

  const handleSave = (dados: IFormData) => {
    formValidationSchema
      .validate(dados, { abortEarly: false })
      .then((dadosValidados) => {
        setIsLoading(true);

        if (id === 'nova') {
          ProdutosService
            .create(dadosValidados)
            .then((result) => {
              setIsLoading(false);

              if (result instanceof Error) {
                alert(result.message);
              } else {
                if (isSaveAndClose()) {
                  navigate('/produtos');
                } else {
                  navigate(`/produtos/detalhe/${result}`);
                }
              }
            });
        } else {
          ProdutosService
            .updateById(Number(id), { id: Number(id), ...dadosValidados })
            .then((result) => {
              setIsLoading(false);

              if (result instanceof Error) {
                alert(result.message);
              } else {
                if (isSaveAndClose()) {
                  navigate('/produtos');
                }
              }
            });
        }
      })
      .catch((errors: yup.ValidationError) => {
        const validationErrors: IVFormErrors = {};

        errors.inner.forEach((error) => {
          if (!error.path) return;

          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      });
  };

  const handleDelete = (id: number) => {
    if (confirm('Realmente deseja apagar?')) {
      ProdutosService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert('Registro apagado com sucesso!');
          navigate('/produtos');
        }
      });
    }
  };

  return (
    <LayoutBaseDePagina
      titulo={id === 'nova' ? 'Novo produto' : name}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo='Novo'
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          aoClicarEmSalvar={save}
          aoClicarEmSalvarEFechar={saveAndClose}
          aoClicarEmVoltar={() => navigate('/produtos')}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmNovo={() => navigate('/produtos/detalhe/nova')}
        />
      }
    >
      <VForm ref={formRef} onSubmit={handleSave}>
        <Box margin={1} display='flex' flexDirection='column' component={Paper} variant='outlined'>
          <Grid container direction='column' padding={2} spacing={2}>
            {isLoading && (
              <Grid item>
                <LinearProgress variant='indeterminate' />
              </Grid>
            )}

            <Grid item>
              <Typography variant='h6'>Geral</Typography>
            </Grid>

            <Grid container item direction='row' spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <VTextField
                  fullWidth
                  name='name'
                  label='Nome'
                  disabled={isLoading}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <VTextField
                  fullWidth
                  name='price'
                  label='Preço'
                  type='number'
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <VTextField
                  fullWidth
                  name='model'
                  label='Modelo'
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <VTextField
                  fullWidth
                  name='reference'
                  label='Referência'
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <VTextField
                  fullWidth
                  name='brand'
                  label='Marca'
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <VTextField
                  fullWidth
                  name='image_url'
                  label='URL da Imagem'
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <VTextField
                  fullWidth
                  name='quantity'
                  label='Quantidade'
                  type='number'
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <VTextField
                  fullWidth
                  name='user_id'
                  label='Usuario Id'
                  type='text'
                  disabled={isLoading}
                  onChange={(e) => formRef.current?.setFieldValue('user_id', Number(e.target.value))}

                />
              </Grid>

            </Grid>
          </Grid>
        </Box>
      </VForm>
    </LayoutBaseDePagina>
  );
};
