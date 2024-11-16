function Selector({ innerElement, txt, onClick }) {
    return (
        <>
            <div className='centralSelector' onClick={onClick}>
                {innerElement}
            </div>
        </>
    )
}
export default Selector