import axios from 'axios'
import validator from 'validator'

const url = `http://localhost:4200/api/users`

export function saveUser(email, cedula, contrasena){
    try{
        axios.post(url, {
            cedula: cedula ,
            email: email,
            contrasena: contrasena,
            puntos: 0
        }).catch((e)=>{alert(e)})
        
        
    }catch(e){
        alert(e);
    }
}

export async function getUser(email, contrasena){

    try{
        const response = await axios.get(url).catch((e)=> alert(e));

        
        
        for(let i = 0; i < response.data.length; i++){
            if(email.toString() === response.data[i].email && contrasena.toString() === response.data[i].contrasena){
                return response.data[i];
            }
        }
        
        return false;

    }catch(e){
        alert(e)
    }
}

export async function comprobarUsuario(email, cedula){
    const response = await axios.get(url)

    for(let i = 0; i < response.data.length; i++){
        if(cedula.toString() === response.data[i].cedula.toString() && email.toString() === response.data[i].email.toString()){

            return 'La cedula y el email estan registrados';
        }else if(cedula.toString() === response.data[i].cedula.toString()){

            return 'La cedula ya esta registrada';
        }else if(email.toString() === response.data[i].email){

            return 'El email ya esta registrado';
        }      
    }

    return true;
}

export async function existenciaUsuario(email){
    const response = await axios.get(url)

    for(let i = 0; i < response.data.length; i++){
        if(email.toString() === response.data[i].email){
            return true;
        }      
    }

    return false;
}

export async function validarEmail(email){
    return validator.isEmail(email)
}
