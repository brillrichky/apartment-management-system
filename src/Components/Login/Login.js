import React from "react";
import {Col,Container,Row,Button,Form,Alert} from "react-bootstrap"
import loginIcon from '../../images/user.png'
import './Login.css';
import apartmentImg from '../../images/apartment.svg';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {ChangeEvent,FormEvent,useState} from "react";
import {useNavigate} from "react-router-dom";

const initialState = {
    username:'',
    password:'',
}

export function Login(){
    const[form,setForm] = useState(initialState);
    const [alert,setAlert] = useState(null);
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    })

    const {register,handleSubmit,formState} = useForm({resolver:yupResolver(validationSchema)})
    const {errors} = formState

    const submitForm = (data) => {
        console.log('form:',{data});
        fetch('/api/login',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json' 
            },
            method:'POST',
            body:JSON.stringify(data)
        })
        .then((response)=>{
            if([200,201].includes(response.status))
            return response.json()
            else
            return Promise.reject(response) //muncul alert
        })
        .then((username,fullname,token)=>{
            localStorage.setItem('token',token);
            localStorage.setItem('user',fullname);
            return navigate('/');
        })
        .catch((response)=>{
        response.json()
        .then((data)=>{
            console.log(data.message);
            setAlert(data.message);
        })
    })
    }

    return(
        <Container className="container-login">
            <Row>
                <Col lg={4} md={6} sm={12} className="text-center p-5">
                <img className="icon-img" src={loginIcon} alt="icon"/>
                <Form onSubmit={handleSubmit(submitForm)}>
                <Form.Group className="mb-3">
                <input type="text" placeholder="Username" {...register('username')} 
                className={`form-control ${errors.username ? 'is-invalid' : ''} `}
                />
                     <span className="invalid-feedback">{errors.username?.message}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                <input type="password" placeholder="Password" {...register('password')} 
                className={`form-control ${errors.password ? 'is-invalid' : ''} `}
                />
                    <span className="invalid-feedback">{errors.password?.message}</span>
                </Form.Group>

                {alert?<Alert variant="danger">{alert}</Alert>:''}

                <Button variant="primary btn-block" type="submit">
                    Login
                </Button>
                </Form>
                </Col>

                <Col lg={8} md={6} sm={12}>
                    <img className="w-75" src={apartmentImg} alt="apartment" style={{marginLeft:"5%"}}/>
                </Col>
            </Row>
        </Container>
    )
}