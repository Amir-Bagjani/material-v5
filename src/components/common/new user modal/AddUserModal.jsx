import { useEffect, useState } from "react";

import { Box, TextField } from "@mui/material";

import * as Yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import BasicModal from "./BasicModal";


const defaultInputValues = {
    userId: '',
    email: '',
    phoneNumber: ''
};

const AddUserModal = ({ open, onClose, addNewUser  }) => {
    const [values, setValues] = useState(defaultInputValues);


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = Yup.object().shape({
        userId: Yup.string()
            .required('User ID is required')
            .min(6, 'User ID must be at least 6 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid.'),
        phoneNumber: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid'),
    });

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationSchema)
    });

    const addUser = (data) => {
        addNewUser(data);
    };

    const handleChange = (value) => {
        setValues(value)
    };

    useEffect(() => {
        if (open) setValues(defaultInputValues);
    }, [open])



  const getContent = () => {

    const inputFields = {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      gap: 1.5,
    };

    return (
      <Box sx={inputFields}>
          <TextField
            name="userId"
            label="User ID"
            required
            size="small"
            {...register("userId")}
            value={values.userId}
            onChange={(e) => handleChange({ ...values, userId: e.target.value })}
            error={errors.userId ? true : false}
            helperText={errors.userId?.message}
          />
        <TextField
          name="email"
          label="E-mail"
          required
          size="small"
          {...register("email")}
          value={values.email}
          onChange={(e) => handleChange({ ...values, email: e.target.value })}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
        />
        <TextField
          name="phoneNumber"
          label="Phone number"
          required
          size="small"
          {...register("phoneNumber")}
          value={values.phoneNumber}
          onChange={(e) => handleChange({ ...values, phoneNumber: e.target.value })}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber?.message}
        />
      </Box>
    );
  };
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New user"
      subTilte="Fill out inputs and hit submit button"
      content={getContent()}
      onSubmit={handleSubmit(addUser)}
    ></BasicModal>
  );
};

export default AddUserModal;
