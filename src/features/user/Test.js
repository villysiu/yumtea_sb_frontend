const Test = () =>{
    return(
        <div style={{position: 'relative', }}>
            <div style={{
                "font-size": '50px' ,
                position: 'sticky',
                top: '0px',
                left: 0,
                zIndex: '100',
                color: 'black',
                'mix-blend-mode': 'exclusion',

            }}>test</div>

            <div style={{
                'width': '300px',
                'height': '800px', 
                backgroundColor: 'black',
                position: 'absolute',
                top: '0px',
                left: 0,

            }}></div>
            <div style={{
                'width': '300px',
                'height': '800px', 
                backgroundColor: 'white',
                position: 'absolute',
                top: '800px',
                left: 0,
                border: 'red',
                borderWidth: '1px',
                borderStyle: 'solid',

            }}></div>
        </div>
    )
}
export default Test