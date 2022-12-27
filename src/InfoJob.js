import MainInfo from "./mainInfo";


export default function InfoJobMain(props){

    return (
    <div className="container">
        <div className="row mt-3 p-3">
            <MainInfo newdata={props.data} />
            {/* <PeriodoInfo newdata={props.data} />             */}
        </div>
    </div>        
)

}