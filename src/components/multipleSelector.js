import fakeData from '../data.json'
import Card from './card'

function MultipleSelector(props){
    const { question, datatype } = props
    const limit = props.limit===undefined?null:Number(props.limit)
    const logo = fakeData.logos[0].image
    const data = fakeData[datatype]
    let selectedItems = []

    const addToSelectedItems = (data) => {
        let exit = false;
        /* On parcourt la liste d'éléments sélectionnés en cherchant si le nom de l'élément sélectionné 
        figure déjà dans la liste des éléments sélectionnés. S'il est trouvé, on le retire de cette liste. */
        selectedItems.map(item => {
            if(item.name===data.name){
                selectedItems=selectedItems.filter(item => item.name!==data.name);
                exit = true
                return 'lint happy!';
            }
            return 'lint happy!';
        })
        if(exit){return false;}

        /* Dans le cas où le nom du nouvel élément n'est pas déjà présent dans la liste, on vérifie si
        une limite de sélection n'est pas définie.*/
        if(limit){
            /* Dans le cas où une limite est définie, si la limite passée en props de ce composant n'est pas atteinte
            on peut donc ajouter le nouvel élément à la liste d'éléments sélectionnés. */
            if(selectedItems.length+1<=limit){
                selectedItems.push(data);
                return true;
            }
            return false;
        }else{
            /* Sinon si pas de limite, on ajoute l'élément à la liste des éléments sélectionnés directement. */
            selectedItems.push(data);
        }
        return true;
        
    }
    const isSelected = (data, setClassName) => {
        const added = addToSelectedItems(data)
        return setClassName(`${added?'selected':'card'}`) 
    }

    let dataList = data.map(data => (
        <Card 
            name={data.name} 
            image={data.image} 
            data={data} 
            isSelected={isSelected}
            />
        ))
    return (
        <div>
            <img src={logo} alt='Magic Kebab'/>
            <h2>{question}</h2>
            <div as={dataList}>{dataList}</div>
            <button onClick={() => console.log('clic')}>Continuer</button>
        </div>
    )
}

export default MultipleSelector