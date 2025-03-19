import {Link} from "react-router-dom";
import {homeLink, USDollar} from "../../../app/global";
import {sugarMap} from "../../menuitem/menuitemSlice";
import {Col, Row} from "react-bootstrap";

const ManagePurchaseLineitems = ({purchaseLineitems}) =>{
    console.log(purchaseLineitems)
    return(
        <>
            <Row className=" py-3 border-bottom mx-0">
                <Col xs={3}><b>Item</b></Col>


                <Col><b>Customization</b></Col>
                <Col xs={1}><b>Qty.</b></Col>
                <Col xs={1}><b>Unit Price</b></Col>
                <Col xs={1} className="text-end"><b>Subtotal</b></Col>
            </Row>

            {
            purchaseLineitems.map(pl=> {
                console.log(pl)
                return (
                    <Row key={pl.id} className=" my-3  mx-0">

                        <Col xs={3}>{pl.menuitem.title} </Col>
                        <Col>
                            {pl.size.title} | {pl.temperature}
                            {pl.milk.id === 1 ? null : ` | ${pl.milk.title}`}
                            {pl.sugar === "NA" ? null: ` | ${sugarMap.get(pl.sugar)}`}
                        </Col>
                        <Col xs={1}>{pl.quantity}</Col>
                        <Col xs={1}>{USDollar.format(pl.price)}</Col>
                        <Col xs={1} className="text-end"><b>{USDollar.format(pl.price * pl.quantity)}</b></Col>
                    </Row>
                )
            })

        }
        </>
    )
}
export default ManagePurchaseLineitems

       {/*     {pl.size.title} | {pl.temperature}*/}
       {/*             {pl.milk.id === 1 ? null : ` | ${pl.milk.title}`}*/}
       {/*             {pl.sugar === "NA" ? null: ` | ${sugarMap.get(pl.sugar)} Sugar`}*/}



       {/*Price: {USDollar.format(pl.price)}<*/}
       {/*     <div style={{textAlign: 'right'}}>*/}
       {/*     <b>{USDollar.format(pl.price * pl.quantity)}*/}


