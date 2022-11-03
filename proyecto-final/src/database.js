import axios from 'axios'
const url = `http://localhost:4200/api/users`

export function saveUser(email, cedula, contrasena){
    try{
        axios.post(url, {
            cedula: cedula ,
            email: email,
            contrasena: contrasena
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

