import { apiService } from "../services/api.service"

export class Productos{
    constructor(data){
        this.data  = data;
    }

    formatData(){

        return Promise.all(
            this.data.map(async (item) =>{
                return{
                    key: item.id,
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    detail: await this.detailProduct(item.id)
                }
            })
        );
    }

    async detailProduct(idProducto = '') {
        const items = []

        try{

            const response = await apiService('GET', `https://fakestoreapi.com/products/${idProducto}`);
            if(idProducto == '1') throw new Error()

            items.push({id: `${idProducto}`, name: `Tag Enabled ${idProducto}`})
            items.push({id: `${idProducto}1`, name: `Tag Enabled ${idProducto} 2d`})
            return items
        }catch(e){
            items.push({id: '1', name: 'Tag Errorrrrrrr'});
            return items
        }
    }
}