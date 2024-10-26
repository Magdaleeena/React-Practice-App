export default function RemoveItem({id, deleteItem}){

 return(
    <button onClick={() => deleteItem(id)}>
        Remove
    </button>
 )
}