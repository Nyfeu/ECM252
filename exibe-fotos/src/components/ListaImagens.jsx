const ListaImagens = ({ photos }) => {

    return (
        photos.map((photo, key) => (
            <div key={key} style={{display: "inline-block"}}>
                <img src={photo.src.small} alt={photo.alt} />
            </div>
        ))
    )

}

export default ListaImagens