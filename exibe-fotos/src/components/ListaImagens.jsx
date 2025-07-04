const ListaImagens = ({ photos }) => {

    return (
        photos.map((photo, key) => (
            <div key={key} style={{display: "inline-block", padding: '16px'}}>
                <img src={photo.src.small} alt={photo.alt} />
            </div>
        ))
    )

}

export default ListaImagens