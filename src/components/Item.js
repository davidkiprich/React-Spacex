import './Item.css'

export default function Item({ heading,title, button,image}){
    return(
       <section className='item' style={{backgroundImage: `url(${image})`}}>
        <div className='container'>
            <div className='item-text'>
                <p>{heading}</p>
                <h1>{title}</h1>
                <button>{button}</button>
            </div>
        </div>

       </section>
    );
}